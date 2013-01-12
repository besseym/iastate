(function(window,undefined) {
  jQuery.extend(jimEvent.fn, {
    /*************************** START SUPPORT FUNCTIONS ***************************/
    "launchCases": function(cases) {
      if (jimUtil.isAnnotationInactive() && jimUtil.exists(cases) && cases.length) {
        try {
          this.event.stopPropagation();
          this.executeCase(cases.splice(0,1)[0], cases);
        } catch (error) {
          switch(error.name) {
            case "ReferenceError":
            case "TypeError":
              if(error.fileName) {
                jimUtil.debug(error.message + " [file: '" + error.fileName.substring(error.fileName.lastIndexOf("/")+1) + "' at line: " + error.lineNumber + "]");
              } else {
                jimUtil.debug(error.message);
              }
              break;
            default:
              jimUtil.debug(error);
              break;
          }
        }
      }
    },
    "executeCase": function(currentCase, remainingCases) {
      if(jimUtil.exists(currentCase)) {
        this.executeBlocks(currentCase.blocks, remainingCases);
      }
    },
    "undoCases": function($firer) {
      var self = this, undoPauseStack, undoStack, $eventFirer, undoAction, c, cLen;
      $eventFirer = jQuery(document.elementFromPoint(self.event.clientX, self.event.clientY));
      if($firer.has($eventFirer).length === 0) {
        undoPauseStack = $firer.data("jimUndoPauseStack");
        if(jimUtil.exists(undoPauseStack)) {
          while(undoPauseStack.length) {
            clearTimeout(undoPauseStack.pop());
          }
          $firer.removeData("jimUndoPauseStack");
        }
        
        undoStack = $firer.data("jimUndoStack");
        if(jimUtil.exists(undoStack)) {
          for(c=0, cLen=undoStack.length; c<cLen; c+=1) {
            undoAction = undoStack[c];
            if(undoAction.action && undoAction.parameter) {
              jimEvent.fn[undoAction.action].call(self, undoAction.parameter);
            }
          }
        }
        $firer.removeData("jimUndoStack");
      }
    },
    "executeBlocks": function(blocks, cases) {
      if(jimUtil.exists(blocks)) {
        var self = this, b, bLen, block, condition;
        // simulates if-elseif-else construct -> only once block is executed
        for(b=0, bLen=blocks.length; b<bLen; b+=1) {
          block = blocks[b];
          if(jimUtil.exists(block.condition)) {
            condition = self.evaluateExpression(block.condition);
            if(block.condition.datatype && block.condition.datatype === "variable") {
              condition = jimEvent.tryBooleanConversion(condition);
            } else if(typeof(condition) === "string") {
              condition = confirm(condition);
            }
            if(condition === true) {
              self.executeActions(block.actions, cases);
              return;
            }
          } else {
            self.executeActions(block.actions, cases);
            return;
          }
        }
        
        // no block executed, proceed with next case
        if(cases.length) {
          self.executeCase(cases.splice(0,1)[0], cases);
        }
      }
    },
    "executeActions": function(actions, cases) {
      if(jimUtil.exists(actions)) {
        var self = this, a, aLen, l, current, $firer, undo, undoStack, lastUndoAction, remainingActions, remainingCases, callback;
        for(a=0, aLen=actions.length; a<aLen; a+=1) {
          current = actions[a];
          $firer = self.getEventFirer();
          
          if (self.event.isHover) {
            /* initialise mouseover */
            undo = self.getUndoActions(current);
            if(jimUtil.exists(undo) && !jQuery.isEmptyObject(undo)) {
              undoStack = $firer.data("jimUndoStack");
              if(!jimUtil.exists(undoStack)) { undoStack = []; }
              $firer.data("jimUndoStack", undoStack.concat(undo));
            }
          } else if (current.action === "jimChangeStyle" && jimUtil.exists($firer.data("jimUndoStack"))) {
            /* event in-between mouseenter and mouseleave of a mouseover */
            for(l = $firer.data("jimUndoStack").length-1; l >= 0; l -= 1) {
              lastUndoAction = $firer.data("jimUndoStack")[l];
              if(lastUndoAction.action === "jimChangeStyle" && lastUndoAction.target === current.target) {
                jQuery.extend(true, lastUndoAction.parameter, current.parameter);
                break;
              }
            }
          }
          
          if (current.action === "jimPause" || current.parameter.effect) {
            remainingActions = actions.slice(a+1);
            remainingCases = cases.slice(0);
            callback = function() {
              self.executeActions(remainingActions, remainingCases);
            };
            actions = [];
            cases = [];
            aLen = 0; // terminate iteration
            jimEvent.fn[current.action].call(self, current.parameter, callback);
          } else if (current.action === "jimNavigation") {
            jimEvent.clearPauseStack();
            actions = [];
            cases = [];
            aLen = 0; // terminate iteration
            jimEvent.fn[current.action].call(self, current.parameter);
          } else {
            jimEvent.fn[current.action].call(self, current.parameter);
          }
        }
        
        if(cases.length) {
          self.executeCase(cases.splice(0,1)[0], cases);
        }
      }
    },
    "getEventFirer": function(event) {
      var self = this, $firer, myEvent;
      myEvent = event || self.event;
      $firer = jQuery(myEvent.target || myEvent.srcElement);
      if(myEvent.type === "keyup") {
        if($firer.is("html, body") || jQuery.browser.msie && $firer.is(".screen")) {
          $firer = jQuery(".keypressed:not(.text, .password, .textarea)");
        } else if ($firer.is(":input")) {
          $firer = $firer.closest(".firer");
        }
      } else if ($firer.hasClass("dateicon") || $firer.hasClass("timeicon")) {
        $firer = $firer.prev();
      } else {
        $firer = $firer.closest(".firer");
      }
      return $firer;
    },
    "getEventTarget": function(target, instance) {
      var self = this, $target, $firer, $masterTarget, masteritemID;
      if(target instanceof jQuery) {
        return target;
      } else {
        if(jimData && jimData.variables.hasOwnProperty(target)) {
          return target;
        } else {
          $target = jQuery(target);
          if($target.length) {
            $firer = self.getEventFirer();
            if($target.closest(".headerrow").length) {
              return $target;
            } else if($target.parents(".datagrid").length) {
              if($firer.closest(".datagrid").length) {
                if($firer.closest(".headerrow").length) {
                  return $firer.closest(".headerrow").parent().next().children(".datarow").find(target);
                } else {
                  if($target.hasClass("datarow")) {
                    if(typeof(target) === "string" && target.lastIndexOf("tr.odd") !== -1) {
                      return $firer.closest(".datagrid").children("tbody").children("tr.odd").children("td.datacell");
                    } else if (typeof(target) === "string" &&  target.lastIndexOf("tr.even") !== -1) {
                      return $firer.closest(".datagrid").children("tbody").children("tr.even").children("td.datacell");
                    } else {
                      return $firer.closest(".datarow").children("td.datacell");
                    }
                  } else {
                    return $firer.parents(".datarow:first").andSelf().find(target);
                  }
                }
              } else {
                if (jimUtil.exists(instance)) {
                  return jQuery($target.get(0)).closest(".datagrid").find("input[name='_id'][value="+instance["_id"]+"]").closest("tr").find(target);
                } else {
                  if($target.hasClass("datarow")) {
                    if(typeof(target) === "string" && (target.lastIndexOf("tr.odd") !== -1 || target.lastIndexOf("tr.even") !== -1)) {
                      return $target.children("td.datacell");
                    } else {
                      return $target.parents(".datagrid").find(".datarow");
                    }
                  } else {
                    return $target.parents(".datagrid").find(".datarow").find(target);
                  }
                }
              }
            } else if ($firer.closest(".master").length) {
              if(typeof(target) === "string") {
                $masterTarget = $firer.closest(".master").find(target.substring(target.indexOf(" ") + 1)); // cut off master reference (must come first)
              } else if (jimUtil.isArray(target)) {
                $masterTarget = $firer.closest(".master").find(target.join(","));
              } else if(typeof(target) === "object") {
                return jQuery(target);
              }
              return ($masterTarget.length > 0) ? $masterTarget : $target;
            } else if ($firer.hasClass("menunode") && $firer.parents(".submenu").length) {
              masteritemID = $firer.parents(".submenu").attr("masteritem");
              if(masteritemID) {
                if(typeof(target) === "string") {
                  return $firer.parents(".submenu").find(target.split(" ").join(","));
                } else if (jimUtil.isArray(target)) {
                  return jQuery("#"+masteritemID).find(target.join(","));
                } else if(typeof(target) === "object") {
                  return jQuery(target);
                }
              } else {
                return $target;
              }
            } else {
              return $target;
            }
          }
        }
      }
    },
    "getUndoActions": function(action) {
      var self = this, actionType = action.action, undoActions=[], undoAction, $targets, $target, target, type, len, isReadonly, style, s, undoStyle, property, t, tLen;
      switch(actionType) {
        case "jimChangeStyle":
          undoAction = {
            "action": "jimChangeStyle",
            "parameter": []
          };
          for(s=0, len=action.parameter.length; s<len; s+=1) {
            style = action.parameter[s];
            for(target in style) {
              if(style.hasOwnProperty(target)) {
                $target = self.getEventTarget(target);
                if($target) {
                  undoStyle = {};
                  undoStyle[target] = {};
                  if(style[target]["attributes"]) {
                    undoStyle[target]["attributes"] = {};
                    for(property in style[target]["attributes"]) {
                      if(style[target]["attributes"].hasOwnProperty(property)) {
                        undoStyle[target]["attributes"][property] = $target.css(property);
                      }
                    }
                  }
                  if(style[target]["expressions"]) {
                    undoStyle[target]["expressions"] = {};
                    for(property in style[target]["expressions"]) {
                      if(style[target]["expressions"].hasOwnProperty(property)) {
                        undoStyle[target]["expressions"][property] = $target.css(property);
                      }
                    }
                  }
                  if(jQuery.browser.msie) {
                    if(style[target]["attributes-ie"]) {
                      undoStyle[target]["attributes-ie"] = {};
                      for(property in style[target]["attributes-ie"]) {
                        if(style[target]["attributes-ie"].hasOwnProperty(property)) {
                          undoStyle[target]["attributes-ie"][property] = $target.css(property);
                        }
                      }
                    }
                    if(style[target]["expressions-ie"]) {
                      undoStyle[target]["expressions-ie"] = {};
                      for(property in style[target]["expressions-ie"]) {
                        if(style[target]["expressions-ie"].hasOwnProperty(property)) {
                          undoStyle[target]["expressions-ie"][property] = $target.css(property);
                        }
                      }
                    }
                  }
                  undoAction.parameter.push(undoStyle); 
                }
              }
            }
          }
          undoActions.push(undoAction);
          break;
        default:
          $targets = jQuery(action.parameter.target);
          for(t=0, tLen=$targets.length; t<tLen; t+=1) {
            $target = jQuery($targets[t]);
            type = $target.jimGetType();
            switch(actionType) {
              case "jimSetValue":
                // store actual values
                undoAction = {
                  "action": "jimSetValue",
                  "parameter": {
                    "value": self.jimGetValue({"target": action.parameter.target}),
                    "target": action.parameter.target
                  }
                }
                undoActions.push(undoAction);
                // store selection values
                switch(type) {
                  case itemType.selectionlist:
                  case itemType.multiselectionlist:
                  case itemType.radiobuttonlist:
                  case itemType.checkboxlist:
                    undoActions.push(self.getUndoActions({"action": "jimSetSelection", "parameter": {"target": action.parameter.target}})[0]);
                    break;
                }
                break;
              case "jimSetSelection":
                undoAction = {
                  "action": "jimSetSelection",
                  "parameter": {
                    "value": self.jimGetSelection({"target": action.parameter.target}),
                    "target": action.parameter.target
                  }
                };
                undoActions.push(undoAction);
                break;
              case "jimHide":
                //if($target.is(":visible")) {
                  undoAction = {
                    "action": "jimShow",
                    "parameter": {
                      "target": action.parameter.target
                    }
                  };
                  undoActions.push(undoAction);
                //}
                break;
              case "jimShow":
                //if($target.is(":hidden")) {
                  undoAction = {
                    "action": "jimHide",
                    "parameter": {
                      "target": action.parameter.target
                    }
                  };
                  undoActions.push(undoAction);
                //}
                break;
              case "jimEnable":
              case "jimDisable":
                isReadonly = false;
                switch(type) {
                  case itemType.file:
                    isReadonly = $target.find(".file").next("div").children("input[disabled]").length;
                    break;
                  case itemType.date:
                  case itemType.time:
                    isReadonly = $target.next().attr("readonly") === "readonly";
                    break;
                  case itemType.radiobuttonlist:
                  case itemType.checkboxlist:
                    isReadonly = $target.find('input[disabled]').length !== 0;
                    break;
                  case itemType.checkbox:
                  case itemType.radiobutton:
                    isReadonly = $target.children("input[disabled]").length !== 0;
                    break;
                  default:
                    isReadonly = $target.is("[readonly]").length;
                    break;
                }
                if(action.action === "jimDisable" && !isReadonly) {
                  undoAction = {
                    "action": "jimEnable",
                    "parameter": {
                      "target": action.parameter.target
                    }
                  };
                  undoActions.push(undoAction);
                } else if (action.action === "jimEnable" && isReadonly) {
                  undoAction = {
                    "action": "jimDisable",
                    "parameter": {
                      "target": action.parameter.target
                    }
                  };
                  undoActions.push(undoAction);
                }
                break;
            }
          }
          break;
      }
      return undoActions;
    },
    "triggerDragOver": function($target) {
      if(jimUtil.exists($target)) {
        var self = this, $activeOver, $over;
        $target.hide(); // only works because drag event hijacks mouse events
        $activeOver = jQuery(document.elementFromPoint(self.event.clientX, self.event.clientY)).closest(".firer"); // TODO: :visible
        $target.show(); // would cause flicker otherwise
        $over = (self.dragoverStack.length > 0) ? self.dragoverStack[self.dragoverStack.length-1] : $target;
        if($activeOver[0] !== $over[0]) {
          if($activeOver.hasClass("mouseenter")) {
            self.dragoverStack.push($activeOver);
            $activeOver.trigger("dragenter");
          }
          if($activeOver.hasClass("mouseleave") && !self.dragoverStack.contains($activeOver[0])) {
            self.dragoverStack.push($activeOver);
          } else if ($over.hasClass("mouseleave")) {
            self.dragoverStack.pop();
            $over.trigger("dragleave");
          }
        }
      }
    },
    "getGradientStyle": function(gradient) {
      var value;
      if(jQuery.browser.mozilla) {
        value = gradient["-moz"];
      } else if (jQuery.browser.webkit) {
        if(parseFloat(jQuery.browser.version) < 4.0) {
          value = gradient["-webkit-old"];
        } else {
          value = gradient["-webkit"];
        }
      } else if (jQuery.browser.opera) {
        value = gradient["-opera"];
      }
      return value;
    },
    "getCurrentStyle": function(attribute, target) {
      var style, $target = this.getEventTarget(target);
      if($target.length) {
        style = (attribute.startsWith("Jim")) ? $target[0].style[attribute] : $target.css(attribute);
        try {
          return parseInt(style, 10);
        } catch(error) {
          return style;
        }
      }
      return style;
    },
    "evaluateExpression": function(expression, instance) {
      var self = this, result, tmpResult, $datarow, i, iLen;
      if(jimUtil.exists(expression)) {
        if(expression.action) {
          result = jimEvent.fn[expression.action].call(self, expression.parameter, instance);
        } else if(expression.field) {
          result = (jimUtil.exists(instance) && instance.hasOwnProperty(expression.field)) ? instance[expression.field] : expression[field];
        } else if (expression.datatype) {
          switch (expression.datatype) {
            case "datamaster":
              result = [];
              tmpResult = jimData.datamasters[expression.datamaster];
              for(i=0, iLen=tmpResult.length; i<iLen; i+=1) {
                result.push(tmpResult[i]);
              }
              break;
            case "datagrid":
              tmpResult = [];
              jQuery(expression.element).find(".datarow").each(function(index, datarow) {
                tmpResult.push(jQuery(datarow).find("input[name='_id']").val());
              });
              result = self.getDataInstancesById(jimData.datamasters[expression.datamaster], tmpResult);
              break;
            case "variable":
              tmpResult = jimData.get(expression.element);
              if(jimUtil.isArray(tmpResult)) {
                result = [];
                for(i=0, iLen=tmpResult.length; i<iLen; i+=1) {
                  result.push(tmpResult[i]);
                }
              } else {
                result = tmpResult;
              }
              break;
            case "datarow":
              $datarow = jQuery(self.event.target || self.event.srcElement).closest(".datarow");
              tmpResult = [];
              if ($datarow.length) {
                tmpResult = [$datarow.find("input[name='_id']").val()];
              } else {
                jQuery(expression.element).find(".datarow").each(function(index, cell) {
                  tmpResult.push(jQuery(cell).find("input[name='_id']").val());
                });
              }
              result = self.getDataInstancesById(jimData.datamasters[expression.datamaster], tmpResult);
              break;
          }
        } else if (expression.target) {
          result = self.jimGetValue(expression, instance);
        } else {
          result = expression;
        }
      }
      return result;
    }
    /**************************** END SUPPORT FUNCTIONS ****************************/
  });
})(window);