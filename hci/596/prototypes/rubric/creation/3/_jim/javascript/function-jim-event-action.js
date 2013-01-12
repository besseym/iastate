(function(window, undefined) {
  jQuery.extend(jimEvent.fn, {
    "jimNavigation": function(args) {
      if(args.isbackward) {
        if(jQuery.browser.webkit) {
          window.history.back(1);
        } else {
          window.history.go(-1);
        }
        return false;
      } else if(args.forward) {
        history.go(+1);
      } else if(args.target) {
        jimMain.load(args.target, args);
      }
    },
    "jimCreateDrag": function(drag, args) {
      var self = this, $drag, paneWidth = jimLayout.getPaneWidth(), $master, $target, offset, startPosition, dragData, dragTargets;
      $target = self.getEventTarget(args.target);

      switch($target.jimGetType()) {
        case itemType.panel:
          $target = $target.parent();
          break;
      }
      
      $master = $target.parents(".master");
      if($master.length !== 0) {
        $target.wrap("<div class='" + $master.attr("class").split(" ")[0] + "' />");
        $target = $target.parent();
      }
      
      offset = $target.offset();
      offset.left -= paneWidth;
      startPosition = $target.position();
      dragData = {
        "parent": $target.parent(),
        "isContained": args.containment,
        "top": offset.top,
        "left": offset.left,
        "startposition": {
          "type": $target.css("position"),
          "top": startPosition.top,
          "left": startPosition.left,
          "index": $target.index()
        }
      };

      $target.appendTo("#simulation")
             .css({"position": "absolute", "top": dragData.top, "left": dragData.left})
             .data("jimDrag", dragData);

      $drag = jQuery(drag); // $drag and $target might not be the same (multidrag)
      dragTargets = jimUtil.exists($drag.data("dragTargets")) ? $drag.data("dragTargets") : [];
      dragTargets.push($target);
      $drag.data("jimDragTargets", dragTargets);

      return dragData;
    },
    "jimRestoreDrag": function($drag) {
      var dragTargets, $target, dragData, i, iLen;
      dragTargets = $drag.data("jimDragTargets");
      for(i=0, iLen=dragTargets.length; i<iLen; i+=1) {
        $target = jQuery(dragTargets[i]);
        dragData = $target.data("jimDrag");
        if(dragData.isContained) {
          jimUtil.insertInto({"target": $target, "parent": dragData.parent});
        }
      }
    },
    "jimDestroyDrag": function($drag) {
      var dragTargets, i, iLen;
      dragTargets = $drag.data("jimDragTargets");
      for(i=0, iLen=dragTargets.length; i<iLen; i+=1) {
        jQuery(dragTargets[i]).removeData("jimDrag");
      }
      $drag.removeData("jimDragTargets");
    },
    "jimMove": function(args) {
      if(jimUtil.exists(args)) {
        var self = this, $target, eventData, dragData, position, newPosition = {}, $parent, parentOffset, containment, scrollX, scrollY;
        $target = self.getEventTarget(args.target);
        if($target.length) {
          eventData = self.event.data;
          switch(args.type) {
            case "movewithcursor":
              dragData = $target.data("jimDrag");
              if(!jimUtil.exists(dragData)) {
                dragData = self.jimCreateDrag(eventData.target, args);
              }
              scrollY = jimLayout.$simulation.scrollTop();
              scrollX = jimLayout.$simulation.scrollLeft();
              
              position = {
                "top": dragData.top,
                "left": dragData.left
              };
              
              if($target.parent("#simulation").length === 0) {
                $parent = $target.parent();  
                parentOffset = $parent.offset();
                position.top = position.top - parentOffset.top;
                position.left = position.left - (parentOffset.left - jimLayout.getPaneWidth());
                
                if(args.containment) {
                  $parent = dragData.parent;
                  containment = {
                    "top": 0,
                    "left": 0,
                    "bottom": $parent.innerHeight() - $target.outerHeight() + parseInt($parent.css("border-top-width"),10),
                    "right":  $parent.innerWidth() - $target.outerWidth() + parseInt($parent.css("border-left-width"),10)
                  };  
                }
              } else if (args.containment) {
                $parent = dragData.parent;
                parentOffset = $parent.offset();
                parentOffset.left -= jimLayout.getPaneWidth();
                containment = {
                  "top": parentOffset.top + parseInt($parent.css("border-top-width"),10) + parseInt($parent.css("padding-top"),10),
                  "left": parentOffset.left + parseInt($parent.css("border-left-width"),10) + parseInt($parent.css("padding-left"),10),
                  "bottom": parentOffset.top + $parent.innerHeight() - $target.outerHeight() + parseInt($parent.css("border-top-width"),10),
                  "right": parentOffset.left + $parent.innerWidth() - $target.outerWidth() + parseInt($parent.css("border-left-width"),10)
                };
              }

              if(args.containment) {
                switch(args.axis) {
                  case "x":
                    newPosition = {
                      "top": position.top + scrollY,
                      "left": Math.min(containment.right + scrollX, Math.max(containment.left, position.left + eventData.deltaX) + scrollX)
                    };
                    break;
                  case "y":
                    newPosition = {
                      "top": Math.min(containment.bottom + scrollY, Math.max(containment.top, position.top + eventData.deltaY) + scrollY)
                    };
                    break;
                  default:
                    newPosition = {
                      "top": Math.min(containment.bottom + scrollY, Math.max(containment.top, position.top + eventData.deltaY) + scrollY),
                      "left": Math.min(containment.right + scrollX, Math.max(containment.left, position.left + eventData.deltaX) + scrollX)
                    };
                    break;
                }
              } else {
                switch(args.axis) {
                  case "x":
                    newPosition = {
                      "top": position.top + scrollY,
                      "left": position.left + scrollX + eventData.deltaX
                    };
                    break;
                  case "y":
                    newPosition = {
                      "top": position.top + scrollY + eventData.deltaY
                    };
                    break;
                  default:
                    newPosition = {
                      "top": position.top + scrollY + eventData.deltaY,
                      "left": position.left + scrollX + eventData.deltaX
                    };
                    break;
                }
              }
              $target.css(newPosition);
              self.triggerDragOver($target);
              break;
            case "movetodragstart":
              dragData = $target.data("jimDrag");
              if(jimUtil.exists(dragData)) {
                jimUtil.insertInto({"target": $target, "parent": dragData.parent, "position": dragData.startposition});  
              }
              break;
            case "movebyoffset":
              position = $target.position();
              $target.css({"top": position.top + args.top, "left": position.left + args.left});
              break;
            case "movetoposition":
              if($target.parent("#simulation").length) {
               args.left += jimLayout.getPaneWidth();
              }
              $target.css({"top": args.top, "left": args.left});
              //TODO: $target.css({"position": args.position, "top": args.top, "left": args.left});
              break;
          }
        }
      }
    },
    "jimInsert": function(args) {
      if(jimUtil.exists(args) && jimUtil.exists(args.target)) {
        var self = this, $target, $parent;
        $target = self.getEventTarget(args.target);
        $parent = self.getEventTarget(args.parent);
        if(jimUtil.exists($target) && jimUtil.exists($parent)) {
          switch(self.event.type) {
            case "dragend":
              jimUtil.insertInto({"target": $target, "parent": $parent, "event": self.event});
              break;
            default:
              jimUtil.insertInto({"target": $target, "parent": $parent});
              break;
          }
        }
      }
    },
    "jimShow": function(args, callback) {
      var self = this
      if(jimUtil.exists(args) && jimUtil.exists(args.target)) {
        jimUtil.show(self.getEventTarget(args.target), args, callback);
      }
    },
    "jimHide": function(args, callback) {
      if(jimUtil.exists(args) && jimUtil.exists(args.target)) {
        var self = this, $targets, $target, t, tLen, $tree;
        $targets = self.getEventTarget(args.target);
        if(jimUtil.exists($targets)) {
          for(t=0, tLen=$targets.length; t<tLen; t+=1) {
            $target = jQuery($targets[t]);
            if($target.jimGetType() === itemType.panel) {
              break;
            }
            if(args.effect) {
              /* TODO: add .stop() to interrupt animation */
              $target.show().hide(args.effect.type, {"direction": args.effect.direction}, args.effect.duration, callback);
            } else {
              $target.hide();
            }
            /* start special component behavior */
            jQuery(args.target + "-submenu").hide();
            $tree = ($target.hasClass("tree")) ? $target : $target.parents(".tree");
            if ($tree.length) {
              jQuery.fn.jimTree.update($tree);
            }
            /* end special component behavior */
          }
        }
      }
    },
    "jimChangeStyle": function(args) {
      if(args) {
        var self = this, s, sLen, style, target, $target, expression, tmpResult;
        for(s=0, sLen=args.length; s<sLen; s+=1) {
          style = args[s];
          for(target in style) {
            if(style.hasOwnProperty(target)) {
              $target = self.getEventTarget(target);
              if($target) {
                if(style[target]["attributes"]) {
                  $target.css(style[target]["attributes"]);
                }
                try {
                    for(expression in style[target]["expressions"]) {
                      if(style[target]["expressions"].hasOwnProperty(expression)) {
                        $target.css(expression, (isNaN(parseInt(style[target]["expressions"][expression], 10))) ? eval(style[target]["expressions"][expression]) : style[target]["expressions"][expression]);
                      }
                    }
                  } catch(e) {
                    jimUtil.debug(e); // IE has problems with gradient expression, expects "url" attribute
                  }
                if(jQuery.browser.msie) {
                  if(style[target]["attributes-ie"]) {
                    $target.css(style[target]["attributes-ie"]);
                  }
                  try {
                      for(expression in style[target]["expressions-ie"]) {
                        if(style[target]["expressions-ie"].hasOwnProperty(expression)) {
                          $target.css(expression, (isNaN(parseInt(style[target]["expressions-ie"][expression], 10))) ? eval(style[target]["expressions-ie"][expression]) : style[target]["expressions-ie"][expression]);
                        }
                      }
                    } catch (e) {
                      jimUtil.debug(e);
                    }
                }
              }
            }
          }
        }
      }
    },
    "jimEnable": function(args) {
      if(jimUtil.exists(args) && jimUtil.exists(args.target)) {
        var self = this, $targets, $target, $icon;
        $targets = self.getEventTarget(args.target);
        if(jimUtil.exists($targets) && $targets.length) {
          $targets.each(function(i, target) {
            $target = jQuery(target);
            switch($target.jimGetType()) {
              case itemType.text:
              case itemType.password:
                $target.find("input").removeAttr("readonly");
                break;
              case itemType.file:
                $target.find("input:file").removeAttr("disabled");
                if(jimEvent.isInDataDataRow($target)) {
                  $target.find("img").removeClass("hidden").next().removeClass("hidden");
                }
                break;
              case itemType.date:
              case itemType.time:
                $icon = $target.find("img");
                $icon.removeAttr("readonly");
                if(jimEvent.isInDataDataRow($target)) { $icon.show(); }
                break;
              case itemType.radiobuttonlist:
              case itemType.checkboxlist:
                if(jimEvent.isInDataDataRow($target)) {
                  $target.find("tr.disabled").hide().end().find("tr.enabled").show().find("input").removeAttr("disabled");
                } else {
                  $target.removeAttr("readonly").find("input").removeAttr("disabled");
                }
                break;
              case itemType.checkbox:
              case itemType.radiobutton:
                $target.removeAttr("disabled");
                break;
              case itemType.selectionlist:
              case itemType.multiselectionlist:
                $target.removeAttr("readonly");
                if(jimEvent.isInDataDataRow($target)) {
                  $target.find("td.disabled").hide().prev("td.enabled").show();
                }
                break;
              case itemType.dropdown:
                $target.removeAttr("readonly").find("input").removeAttr("readonly");
                break;
              default:
                $target.removeAttr("readonly");
                break;
            }
          });
        }
      }
    },
    "jimDisable": function(args) {
      if(jimUtil.exists(args) && jimUtil.exists(args.target)) {
        var self = this, $targets, $target, $icon;
        $targets = self.getEventTarget(args.target);
        if(jimUtil.exists($targets) && $targets.length) {
          $targets.each(function(i, target) {
            $target = jQuery(target);
            switch($target.jimGetType()) {
              case itemType.text:
              case itemType.password:
                $target.find("input").attr("readonly", "readonly");
                break;
              case itemType.file:
                $target.find("input:file").attr("disabled", "disabled");
                if(jimEvent.isInDataDataRow($target)) {
                  $target.find("img").addClass("hidden").next().addClass("hidden");
                }
                break;
              case itemType.date:
              case itemType.time:
                $icon = $target.find("img");
                $icon.attr("readonly", "readonly");
                if(jimEvent.isInDataDataRow($target)) {
                  $icon.hide();
                }
                break;
              case itemType.radiobuttonlist:
              case itemType.checkboxlist:
                if(jimEvent.isInDataDataRow($target)) {
                  $target.find("tr.disabled").show().end().find("tr.enabled").hide().find("input").attr("disabled", "disabled");
                } else {
                  $target.attr("readonly", "readonly").find("input").attr("disabled", "disabled");
                }
                break;
              case itemType.checkbox:
              case itemType.radiobutton:
                $target.attr("disabled", "disabled");
                break;
              case itemType.selectionlist:
              case itemType.multiselectionlist:
                $target.attr("readonly", "readonly");
                if(jimEvent.isInDataDataRow($target)) {
                  $target.find("td.disabled").show().prev("td.enabled").hide();
                }
                break;
              case itemType.dropdown:
                $target.attr("readonly", "readonly").find("input").attr("readonly", "readonly");
                break;
              default:
                $target.attr("readonly", "readonly");
              break;
            }
          });
        }
      }
    },
    "jimFocusOn": function(args) {
      var self = this;
      if(args && args.target) {
        jimUtil.jimPointTo(self.getEventTarget(args.target));
      }
    },
    "jimSetValue": function(args, instance) {
      if(jimUtil.exists(args)) {
        var self = this, $targets, $target, type, i, iLen, value, $options = [];
        value = self.evaluateExpression(args.value, instance);
        if(jimUtil.exists(value)) {
          if(args.variable) {
            //value = (args.value.datamaster) ? self.getData(args.value) : (jimData.variables.hasOwnProperty(args.variable)) ? jimUtil.toJS(self.evaluateExpression(args.value, instance)) : null;
            jimData.set(args.variable, value);
          } else if(args.target) {
            $targets = self.getEventTarget(args.target);
            if($targets) {
              for(i=0, iLen = $targets.length; i < iLen; i += 1) {
                $target = jQuery($targets[i]);
                type = $target.jimGetType();
                switch(type) {
                  case itemType.richtext:
                  case itemType.textcell:
                    $target.find(".valign").html("<span>"+jimUtil.toHTML(value)+"</span>");
                    break;
                  case itemType.button:
                  case itemType.label:
                    $target.find("span").html(jimUtil.toHTML(value));
                    break;
                  case itemType.index:
                  case itemType.summary:
                    //ignore
                    break;
                  case itemType.image:
                    $target.attr("src", "images/" + value);
                    break;
                  case itemType.text:
                  case itemType.password:
                  case itemType.date:
                  case itemType.time:
                    $target.find("input").val(value);
                    break;
                  case itemType.file:
                    try {
                      $target.find("input").val(value);
                    } catch(error) {
                      switch(error.name) {
                        case "NS_ERROR_DOM_SECURITY_ERR":
                            // silent ignore
                          break;
                        default:
                            throw error;
                          break;
                      }
                    }
                    break;
                  case itemType.textarea:
                    $target.val(value);
                    break;
                  case itemType.checkbox:
                  case itemType.radiobutton:
                    if(value.toString() === "false") {
                      $target.attr("checked", false);
                    } else if (value.toString() === "true") {
                      $target.attr("checked", true);
                    }
                    break;
                  case itemType.dropdown:
                    value = self.evaluateExpression(args.value, instance);
                    if(jimUtil.exists(value)) {
                      if(jimEvent.isInDataDataRow($target)) {
                       $target.find("td.disabled").html(jimUtil.toHTML(value));
                      } else {
                        $target.find("input").val("");
                        $options = ($target.children(".options").length) ? $target.children(".options") : $target.data("options");
                        $options.html(jimEvent.getHtml(type, jimUtil.toArray(value)));
                      }
                    }
                    break;
                  case itemType.selectionlist:
                  case itemType.multiselectionlist:
                    if(jimEvent.isInDataDataRow($target)) {
                      $target.find("td.disabled").html(jimUtil.toHTML(value));
                    } else {
                      $target.find("td").html(jimEvent.getHtml(type, jimUtil.toArray(value)));
                    }
                    break;
                  case itemType.radiobuttonlist:
                  case itemType.checkboxlist:
                    if(jimEvent.isInDataDataRow($target)) {
                      $target.find("tr.disabled td").html(jimUtil.toHTML(value));
                    } else {
                      $target.find("tbody").html(jimEvent.getHtml(type, jimUtil.toArray(value), $target));
                    }
                    break;
                  case itemType.datagrid:
                    $target.datagrid("update", value, self.event);
                    break;
                }
              }
            }
          }
        }
      }
    },
    "jimGetValue": function(args, instance) {
      if(jimUtil.exists(args)) {
        var self = this, $target, type, value = "", i = 0, $holder, $options = [];
        $target = self.getEventTarget(args.target, instance);
        if(jimUtil.exists($target) && $target.length) {
          type = $target.jimGetType();
          switch(type) {
            case itemType.richtext:
            case itemType.textcell:
              $target.find("span").each(function(i, span) {
                value += span.innerHTML;
              });
              break;
            case itemType.button:
            case itemType.label:
              value = $target.find("span").html();
              break;
            case itemType.index:
            case itemType.summary:
              //ignore
              break;
            case itemType.image:
              value = $target.attr("src").replace(/^images\//, "");
              break;
            case itemType.checkbox:
            case itemType.radiobutton:
              value = $target.is(":checked");
              break;
            case itemType.text:
            case itemType.password:
            case itemType.date:
            case itemType.time:
            case itemType.file:
              value = $target.find("input").val();
              break;
            case itemType.textarea:
              value = $target.val();
              break;
            case itemType.dropdown:
            case itemType.selectionlist:
            case itemType.multiselectionlist:
              $holder = ((type === itemType.selectionlist) || (type === itemType.multiselectionlist)) ? $target : jQuery("#"+$target.attr("id")+"-options");
              $options = $holder.find("div.option");
              for(i=0; i<$options.length; i += 1) {
                value += jQuery($options[i]).text();
                if(i+1 < $options.length) { value += ","; }
              }
              break;
            case itemType.radiobuttonlist:
            case itemType.checkboxlist:
              $options = $target.find("input");
              for(i=0; i<$options.length; i += 1) {
                value += $options[i].value;
                if(i+1 < $options.length) { value += ","; }
              }
              break;
            case itemType.datagrid:
              break;
          }
          return value;
        }
      }
    },
    "jimSetSelection": function(args, instance) {
      if(jimUtil.exists(args) && jimUtil.exists(args.value) && jimUtil.exists(args.target)) {
        var self = this, $targets, $target, type, value = "", $options, $option, option, t, tLen, o, oLen, v, vLen;
        if (args.value.datamaster) {
          jimData.set(args.target, jimGetDataInstanceIds(args.value.source));
        } else {
          value = self.evaluateExpression(args.value, instance);
          $targets = self.getEventTarget(args.target);
          if(jimUtil.exists($targets)) {
            for(t=0, tLen=$targets.length; t<tLen; t+=1) {
              $target = jQuery($targets[t]);
              type = $target.jimGetType();
              switch(type) {
                case itemType.dropdown:
                  $options = ($target.children(".options").length) ? $target.children(".options") : $target.data("options");
                  for(o=0, oLen=$options.children(".option").length; o<oLen; o+=1) {
                    option = $options.children(".option")[o];
                    if(option.textContent === value) {
                      $target.find("input").val(value.toString());
                      return false;
                    }
                  }
                  break;
                case itemType.selectionlist:
                  $options = $target.find("div.option").removeClass("selected");
                  for(o=0, oLen=$options.length; o<oLen; o+=1) {
                    $option = jQuery($options[o]);
                    if($option.text() === value) {
                      $option.addClass("selected");
                      break;
                    }
                  }
                  break;
                case itemType.multiselectionlist:
                  value = jimUtil.toArray(value);
                  $options = $target.find("div.option").removeClass("selected");
                  for(o=0, oLen=$options.length; o<oLen; o+=1) {
                    $option = jQuery($options[o]);
                    for(v=0, vLen=value.length; v<vLen; v+=1) {
                      if($option.text() === value[v]) {
                        $option.addClass("selected");
                        break;
                      }
                    }
                  }
                  break;
                case itemType.radiobuttonlist:
                  $options = $target.find("input").removeAttr("checked");
                  for(o=0, oLen=$options.length; o<oLen; o+=1) {
                    option = $options[o];
                    if(option.value === value) {
                      option.checked = true;
                      break;
                    }
                  }
                  break;
                case itemType.checkboxlist:
                  value = jimUtil.toArray(value);
                  $options = $target.find("input").removeAttr("checked");
                  for(o=0, oLen=$options.length; o<oLen; o+=1) {
                    option = $options[o];
                    for(v=0, vLen=value.length; v<vLen; v+=1) {
                      if(option.value === value[v]) {
                        option.checked = true;
                        break;
                      }
                    }
                  }
                  break;
              }
            }
          }
        }
      }
    },
    "jimGetSelection": function(args) {
      if(jimUtil.exists(args) && jimUtil.exists(args.target)) {
        var self = this, $target, i, iLen, value = "", $selected;
        $target = self.getEventTarget(args.target);
        if(jimUtil.exists($target) && $target.length) {
          switch($target.jimGetType()) {
            case itemType.dropdown:
              return $target.find("input").val();
            case itemType.selectionlist:
            case itemType.multiselectionlist:
              // TODO: use list instead of comma-separated string
              //              selections = [];
              //              $target.children("div.selected").each(function(i, option) {
              //                selections.push(option.innerHTML);
              //              });
              //              return selections;
              $selected = $target.find("div.selected");
              for(i=0, iLen=$selected.length; i<iLen; i+=1) {
                value += $selected[i].textContent;
                if(i<iLen-1) {
                  value += ",";
                }
              }              
              return value;
            case itemType.radiobuttonlist:
            case itemType.checkboxlist:
              // TODO: use list instead of comma-separated string
              //              selections = [];
              //              $target.find("input:checked").each(function(i, option) {
              //                selections.push(option.value);
              //              });
              //              return selections;
              $selected = $target.find("input:checked");
              for(i=0, iLen=$selected.length; i < iLen; i += 1) {
                value += $selected[i].value;
                if(i<iLen-1) {
                  value += ",";
                }
              }
              return value;
          }
        }
      }
    },
    "jimPause": function(args, callback) {
      var self = this, $firer, undoPauseStack;
      if(jimUtil.exists(args)) {
        if(self.event.isHover) {
          $firer = self.getEventFirer();
          undoPauseStack = $firer.data("jimUndoPauseStack");
          if(!jimUtil.exists(undoPauseStack)) {
            undoPauseStack = [];
          }
          undoPauseStack.push(setTimeout(callback, args.pause));
          $firer.data("jimUndoPauseStack", undoPauseStack);
        } else {
          jimEvent.pauseStack.push(setTimeout(callback, args.pause));
        }
      }
    }
  });
})(window);