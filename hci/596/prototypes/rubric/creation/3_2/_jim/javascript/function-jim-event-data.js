(function(window, undefined) {
  jQuery.extend(jimEvent.fn, {
    "jimCreateData": function(args) {
      var self = this, datamaster, newInstance, field, value;
      if (args && args.datamaster && args.fields) {
        datamaster = args.datamaster;
        if (jimData.datamasters.hasOwnProperty(datamaster)) {
          newInstance = {
            "_id": jimData.datamasters[datamaster].length + 1,
            "_datamaster": datamaster
          };
          
          for(field in args.fields) {
            if(args.fields.hasOwnProperty(field)) {
              value = args.fields[field];
              newInstance[field] = (jQuery.isEmptyObject(value)) ? "" : self.evaluateExpression(value);
            }
          }
          
          jimData.datamasters[datamaster].push(newInstance);
        }
      }
    },
    "jimUpdateData": function(args) {
      var self = this, datamaster, instances, instance, i, len, value, $grids, g, gLen, k, kLen, $datarows, field, $field;
      if (args && args.fields) {
        // update data
        instances = jimUtil.toArray(self.evaluateExpression(args));
        for(i=0, len=instances.length; i < len; i += 1) {
          instance = instances[i];
          for(field in args.fields) {
            if(args.fields.hasOwnProperty(field)) {
              value = args.fields[field];
              if(!jQuery.isEmptyObject(value)) {
                instance[field] =  self.evaluateExpression(value);
              }
            }
          }
        }
        // update datagrids
        datamaster = args.datamaster || args.parameter && args.parameter.datamaster || instance["_datamaster"];
        $grids = jQuery(".datagrid[datamaster=" + datamaster +"]");
        for(g=0, gLen=$grids.length; g < gLen; g += 1) {
          for (k=0, kLen=instances.length; k < kLen; k += 1) {
            instance = instances[k];
            $datarows = jQuery($grids[g]).find("input[name='_id'][value=" + instance["_id"] + "]").parents(".datarow");
            if($datarows.length) {
              $row = jQuery($datarows[0]);
              for (field in instance) {
                if (instance.hasOwnProperty(field) && jimUtil.exists(field) && field !== "_id" && field !== "_datamaster") {
                  value = instance[field];
                  $field = $row.find("[name='" + field + "']");
                  $field.val(value);
                  switch($field.jimGetType()) {
                    case itemType.dropdown:
                    case itemType.selectionlist:
                    case itemType.multiselectionlist:
                    case itemType.radiobuttonlist:
                    case itemType.checkboxlist:
                      self.jimSetSelection({"target": $field, "value": value});
                      // intentional fall-through
                    default:
                      self.jimSetValue({"target": $field, "value": value});
                      break;
                  }
                }
              }
            }
          }
        }
      }
    },
    "jimDeleteData": function(args) {
      var self = this, datamaster, $grid, variable, instances, removeInstances, removeInstance, removeID, i, iLen, j, id;
      if (args) {
        datamaster = args.datamaster || args.parameter && args.parameter.datamaster;
        if (args.datatype === "datamaster") {
          // delete datamaster
          jimData.datamasters[datamaster] = [];
          // update datagrids
          jQuery(".datagrid[datamaster=" + datamaster +"]").each(function(index, grid) {
            jQuery(grid).children("tbody").html("<tr><td></td></tr>");
          });
          // update variables
          for(variable in jimData.variables) {
            if(jimData.variables.hasOwnProperty(variable)) {
              instances = jimData.variables[variable];
              if(jimUtil.isArray(instances)) {
                for(i=instances.length-1; i>=0; i-=1) {
                  removeInstance = instances[i];
                  if(removeInstance["_datamaster"] === datamaster) {
                    instances.splice(i,1);
                  }
                }
              }
            }
          }
        } else {
          // delete datamaster
          removeInstances = jimUtil.toArray(self.evaluateExpression(args));
          datamaster = datamaster || removeInstances.length && removeInstances[0]["_datamaster"];
          instances = jimData.datamasters[datamaster];
          removeID = [];
          for (i=instances.length-1; i>=0 && removeInstances.length; i-=1) {
            for (j=removeInstances.length-1; j>=0; j-=1) {
              id = removeInstances[j]["_id"];
              if (instances[i]["_id"] === id) {
                removeID.push(id);
                removeInstances.splice(j, 1);
                instances.splice(i, 1);
                break;
              }
            }
          }
          // update datagrids
          jQuery(".datagrid[datamaster=" + datamaster +"]").each(function(index, grid) {
            $grid = jQuery(grid);
            for (i=0, iLen=removeID.length; i<iLen; i+=1) {
              $grid.find(".datarow:has(input[name='_id'][value=" + removeID[i] + "])").remove();
            }
            $grid.trigger("update.datagrid");
          });
          // update variables
          for(variable in jimData.variables) {
            if(jimData.variables.hasOwnProperty(variable)) {
              instances = jimData.variables[variable];
              if(jimUtil.isArray(instances)) {
                for(i=0, iLen=removeID.length; i<iLen; i+=1) {
                  for(j=instances.length-1; j>=0; j-=1) {
                    removeInstance = instances[j];
                    if(removeInstance["_datamaster"] === datamaster && removeInstance["_id"] === removeID[i]) {
                      instances.splice(j,1);
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "jimFilterData": function(args) {
      var self = this, filteredInstances = [], instances, i, len, result, searchTokens, searchExpression, search, property;
      if (args) {
        instances = jimUtil.toArray(self.evaluateExpression(args));
        for(i=0, len=instances.length; i < len; i += 1) {
          instance = instances[i];
          result = self.evaluateExpression(args.value, instance);
          if (typeof (result) === "string") {
            searchTokens = jimUtil.escapeRegex(result).split(' ');
            searchExpression = '^(?=.*?' + searchTokens.join(')(?=.*?') + ').*$';
            search = new RegExp(searchExpression, "i");
            
            // TODO: apply over whole instance not attributes
            // values = jimUtil.getValues(instance, ["_id", "_datamaster"]).join(" ");
            // if (search.test(values)) {
            //   filteredInstances.push(instance);
            // }
            
            for(property in instance) {
              if(instance.hasOwnProperty(property) && property !== "_id" && property !== "_datamaster") {
                if (search.test(instance[property])) {
                  filteredInstances.push(instance);
                  break;
                }
              }
            }
          } else if (result) {
            filteredInstances.push(instance);
          }
        }
      }
      return filteredInstances;
    },
    "jimSumData": function(args) {
      var self = this, instances, result = 0, i, len, tmpResult;
      if (args) {
        instances = jimUtil.toArray(self.evaluateExpression(args));
        for(i=0, len=instances.length; i < len; i += 1) {
          tmpResult = jimEvent.tryNumberConversion(self.evaluateExpression(args.value, instances[i]));
          if (jimUtil.exists(tmpResult) && !isNaN(tmpResult)) {
            result += tmpResult;
          } else {
            result = null;
            break;
          }
        }
        return result;
      }
    },
    "jimAvgData": function(args) {
      var self = this, result = null, sum, length;
      if (args) {
        length = jimUtil.toArray(self.evaluateExpression(args)).length;
        if (length !== 0) {
          sum = self.jimSumData(args);
          if (sum !== null && !isNaN(sum)) {
            result = sum / length;
          }
        }
      }
      return result;
    },
    "jimMaxData": function(args) {
      var self = this, values = [], instances, i, len;
      if (args) {
        instances = jimUtil.toArray(self.evaluateExpression(args));
        for(i=0, len=instances.length; i < len; i += 1) {
          values.push(self.evaluateExpression(args.value, instances[i]));
        }
      }
      return self.jimMax(values);
    },
    "jimMinData": function(args) {
      var self = this, values = [], instances, i, len;
      if (args) {
        instances = jimUtil.toArray(self.evaluateExpression(args));
        for(i=0, len=instances.length; i < len; i += 1) {
          values.push(self.evaluateExpression(args.value, instances[i]));
        }
      }
      return self.jimMin(values);
    },
    "jimCountData": function(args) {
      var self = this, tmpResult, result = null;
      if (args) {
        tmpResult = self.evaluateExpression(args);
        result = (tmpResult === "") ?  0 : jimUtil.toArray(tmpResult).length;
      }
      return result;
    },
    "jimSelectData": function(args) {
      var self = this, result = [], instances, i, len;
      if (args) {
        instances = jimUtil.toArray(self.evaluateExpression(args));
        for(i=0, len=instances.length; i < len; i += 1) {
          result.push(self.evaluateExpression(args.value, instances[i]));
        }
      }
      return result.join(",");
    },
    "jimDistinctData": function(args) {
      var self = this, result = [], instances, i, len;
      if (args) {
        instances = jimUtil.toArray(self.evaluateExpression(args));
        for(i=0, len=instances.length; i < len; i += 1) {
          result.push(self.evaluateExpression(args.value, instances[i]));
        }
        result = jimUtil.unique(result);
      }
      return result.join(",");
    },
    "jimAddToData": function(args) {
      var self = this, result = [], sourceA, datamasterA, sourceB, datamasterB, instances;
      if (jimUtil.exists(args) && jimUtil.exists(args[0]) && jimUtil.exists(args[1])) {
        sourceA = jimUtil.toArray(self.evaluateExpression(args[0]));
        sourceB = jimUtil.toArray(self.evaluateExpression(args[1]));
        
        if(args[0].datatype === "variable") {
          if(sourceA.length) {
            datamasterA = sourceA[0]["_datamaster"];
          }
        } else {
          datamasterA = args[0].datamaster;
        }
        
        if(args[1].datatype === "variable") {
          if(sourceB.length) {
            datamasterB = sourceB[0]["_datamaster"];
          }
        } else {
          datamasterB = args[1].datamaster;
        }
        
        if(datamasterA && datamasterB && datamasterA === datamasterB || datamasterA === undefined && datamasterB === undefined) {
          result = jQuery.merge(sourceA, sourceB);
        } else if (datamasterA === undefined && datamasterB) {
          result = sourceB;
        } else {
          result = sourceA;
        }
      }
      return result;
    },
    "jimRemoveFromData": function(args) {
      var self = this, result = [], sourceA, sourceB, i, j;
      if (jimUtil.exists(args) && jimUtil.exists(args[0]) && jimUtil.exists(args[1])) {
        sourceA = jimUtil.toArray(self.evaluateExpression(args[0]));
        sourceB = jimUtil.toArray(self.evaluateExpression(args[1]));
        for (i = sourceB.length - 1; i >= 0 && sourceA.length; i -= 1) {
          for (j = sourceA.length - 1; j >= 0; j -= 1) {
            if (sourceB[i] === sourceA[j]) {
              sourceA.splice(j, 1);
              sourceB.splice(i, 1);
              break;
            }
          }
        }
        result = sourceA;
      }
      return result;
    },
    "jimFirstPageData": function(args) {
      var self = this, $target, size, $datarows;
      if (args) {
        $target = self.getEventTarget(args.target);
        if ($target.length) {
          size = parseInt($target.attr("size"), 10);
          if(size > 0) {
            $datarows = $target.find(".datarow");
            $datarows.addClass("hidden").filter(":lt(" + size + ")").removeClass("hidden");
            $target.trigger("update.datagrid");
          }
        }
      }
    },
    "jimPrevPageData": function(args) {
      var self = this, $target, size, $datarows, $prev;
      if (args) {
        $target = self.getEventTarget(args.target);
        if ($target.length) {
          size = parseInt($target.attr("size"), 10);
          $datarows = $target.find(".datarow");
          $prev = $datarows.filter(":visible").first().prev();
          if ($prev.length) {
            $datarows.addClass("hidden");
            while (size>0 && $prev.length) {
              $prev = $prev.removeClass("hidden").prev();
              size -= 1;
            }
            $target.trigger("update.datagrid");
          }
        }
      }
    },
    "jimNextPageData": function(args) {
      var self = this, $target, size, $datarows, $next;
      if (args) {
        $target = self.getEventTarget(args.target);
        if ($target.length) {
          size = parseInt($target.attr("size"), 10);
          $datarows = $target.find(".datarow");
          $next = $datarows.filter(":visible").last().next();
          if ($next.length) {
            $datarows.addClass("hidden");
            while (size>0 && $next.length) {
              $next = $next.removeClass("hidden").next();
              size -= 1;
            }
          }
          $target.trigger("update.datagrid");
        }
      }
    },
    "jimLastPageData": function(args) {
      var self = this, $target, $datarows, gridSize, filterSize, index;
      if (args) {
        $target = self.getEventTarget(args.target);
        if ($target.length) {
          $datarows = $target.find(".datarow");
          gridSize = $datarows.length;
          filterSize = parseInt($target.attr("size"), 10);
          index = (gridSize % filterSize === 0) ? gridSize - filterSize - 1 : gridSize - (gridSize % filterSize) - 1;
          if(!isNaN(index)) {
            $datarows.addClass("hidden").filter(":gt(" + index + ")").removeClass("hidden");
            $target.trigger("update.datagrid");
          }
        }
      }
    },
    "getDataInstancesById": function(instances, ids) {
      var result=[], i, ilen, j, jlen, instance;
      for (i=0, ilen=ids.length; i<ilen; i+=1) {
        for (j=0, jlen=instances.length; j<jlen; j+=1) {
          instance = instances[j];
          if (jimEvent.tryNumberConversion(ids[i]) === instance["_id"]) {
            result.push(instance);
            break;
          }
        }
      }
      return result;
    }
  });

  /* START RENDER FUNCTIONS */
  if(typeof(jQuery.views) === "object") {
    jQuery.views.registerHelpers({
      "getDataRowClass": function(index) {
        return ((index)%2===0) ? "even" : "odd";
      },
      "hasValue": function(array, value) {
        return jimUtil.toArray(array).contains(value);
      },
      "isTrue": function(value) {
        return (jimUtil.exists(value)) ? value.toString() === "true" : false;
      },
      "getImagePath": function(path) {
        return (path) ? "images/" + path : "_jim/images/common/crossimage.png";
      }
    });
  }
  /* END RENDER FUNCTIONS */
})(window);