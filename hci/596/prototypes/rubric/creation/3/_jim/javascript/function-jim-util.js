(function( window, undefined) {
  /* START PREVENT RIGHT-CLICK CONTEXT MENU */
  jQuery("html").bind("mouseup", function(event) {
    if(event.button === 2) {
      this.oncontextmenu = function() { return false; };
    }
  });
  /* END PREVENT RIGHT-CLICK CONTEXT MENU */
  
  /* START PROTOTYPICAL ADDITIONS */
  Array.prototype.contains = function(value) {
    if (value) {
      var array = this;
      for (var i = 0; i < array.length; i++) {
        var org = array[i];
        if(org instanceof jQuery) {
          org = org[0];
        }
        if(value instanceof jQuery) {
          value = value[0];
        }
        if (org === value) {
          return true;
        }
      }
    }
    return false;
  };

  /* IE: string has no trim function */
  if(typeof String.prototype.trim !== "function") {
    String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }
  
  if (typeof String.prototype.startsWith !== "function") {
    String.prototype.startsWith = function(str) {
      return this.indexOf(str) === 0;
    };
  }
  
  if (typeof String.prototype.endsWith !== "function") {
    String.prototype.endsWith = function(suffix) {
      return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
  }

  jQuery.expr[":"].econtains = function(obj, index, meta, stack) {
    return (obj.textContent || obj.innerText || $(obj).text() || "").toLowerCase() == meta[3].toLowerCase();
  };

  /* Rick Stahl: http://www.west-wind.com/WebLog/posts/282495.aspx */
  String.repeat = function(chr, count) {
    var str = "";
    for ( var x = 0; x < count; x++) {
      str += chr;
    }
    return str;
  };

  String.prototype.padL = function(width, pad) {
    if (!width || width < 1) {
      return this;
    }
    if (!pad) {
      pad = " ";
    }
    var length = width - this.length;
    if (length < 1) {
      return this.substr(0, width);
    }
    return (String.repeat(pad, length) + this).substr(0, width);
  };

  String.prototype.padR = function(width, pad) {
    if (!width || width < 1) {
      return this;
    }
    if (!pad) {
      pad = " ";
    }
    var length = width - this.length;
    if (length < 1) {
      this.substr(0, width);
    }
    return (this + String.repeat(pad, length)).substr(0, width);
  };

  Date.prototype.formatDate = function(format) {
    var date = this;
    if (!format) {
      format = "MM/dd/yyyy";
    }
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    format = format.replace("MM", month.toString().padL(2, "0"));
    if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2, 2));
    }
    format = format.replace("dd", date.getDate().toString().padL(2, "0"));
    var hours = date.getHours();
    if (format.indexOf("t") > -1) {
      if (hours > 11) {
        format = format.replace("t", "pm");
      } else {
        format = format.replace("t", "am");
      }
    }
    if (format.indexOf("HH") > -1) {
      format = format.replace("HH", hours.toString().padL(2, "0"));
    }
    if (format.indexOf("hh") > -1) {
      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours === 0) {
        hours = 12;
      }
      format = format.replace("hh", hours.toString().padL(2, "0"));
    }
    if (format.indexOf("mm") > -1) {
      format = format.replace("mm", date.getMinutes().toString().padL(2, "0"));
    }
    if (format.indexOf("ss") > -1) {
      format = format.replace("ss", date.getSeconds().toString().padL(2, "0"));
    }
    return format;
  };

  /*
   * after: Bound Inheritance (ThinWire Ajax Framework) from: Ajax Patterns - JavaScript Inheritance
   * http://ajaxpatterns.org/Javascript_Inheritance
   * http://joshgertzen.com/object-oriented-super-class-method-calling-with-javascript
   */
  function Class() { }
  Class.prototype.construct = function() {};
  Class.extend = function(def) {
    var classDef, proto, superClass;
    classDef = function() {
      if (arguments[0] !== Class) { this.construct.apply(this, arguments); }
    };
    proto = new this(Class);
    superClass = this.prototype;
    for (var n in def) {
      var item = def[n];
      if (item instanceof Function) { item.parent = superClass; }
      proto[n] = item;
    }
    classDef.prototype = proto;
    classDef.extend = this.extend;  //Give this new class the same static extend method
    return classDef;
  };

  jQuery.fn.extend({
    "jimForceVisibility": function() {
      if(this.is(":hidden")) {
        var $hidden = this.parentsUntil("#simulation").andSelf().filter(function() { return jQuery(this).is(":hidden"); });
        this.data("hiddenElements", $hidden);
        jimUtil.show($hidden);
      }
      return this;
    },
    "jimUndoVisibility": function() {
      var $hidden = this.data("hiddenElements");
      if(jimUtil.exists($hidden)) {
        $hidden.hide();
      }
      return this;
    },
    "jimPosition": function() {
      this.jimForceVisibility();
      var scrollTop = jQuery("#simulation").scrollTop();
      var paneWidth = jimLayout.getPaneWidth();
      var position = jQuery.extend({}, this[0].getBoundingClientRect());
      position.top += scrollTop;
      position.bottom += scrollTop;
      position.left -= paneWidth;
      position.right -= paneWidth;
      this.jimUndoVisibility();
      return position;
    },
    "jimGetType": function() {
      var classes = this.attr("class");
      if(classes !== undefined) {
        classes = classes.split(" ");
        for(var i=0; i<classes.length; i++) {
          var type = classes[i];
          if(itemType.hasOwnProperty(type)) {
            return itemType[type];
          }
        }
      }
    }
  });
  /* END PROTOTYPICAL ADDITIONS */

  var itemType = {
    "label": 1,
    "image": 2,
    "richtext": 3,
    "table": 4,
    "cell": 5,
    "rectangle": 6,
    "dynamicpanel": 7,
    "panel": 8,
    "text": 9,
    "password": 10,
    "textarea": 11,
    "checkbox": 12,
    "radiobutton": 13,
    "date": 14,
    "time": 15,
    "file": 16,
    "selectionlist": 17,
    "multiselectionlist": 18,
    "dropdown": 19,
    "radiobuttonlist": 20,
    "checkboxlist": 21,
    "tree": 22,
    "treenode": 23,
    "menu": 24,
    "menunode": 25,
    "datagrid": 26,
    "headerrow": 27,
    "datarow": 28,
    "datacell": 29,
    "summary": 30,
    "index": 31,
    "master": 32,
    "simulation": 33,
    "screen": 34,
    "template": 35,
    "texttable": 36,
    "textcell": 37,
    "line": 38,
    "button": 39,
    "imagemap": 40,
    "html": 41,
    "url": 42,
    "document": 43,
    "flash": 44,
    "website": 45,
    "group": 46
  };

  /* START UTILITY FUNCTIONS */
  var jimUtil = {
    "debug": function(msg) {
      if (false && window.console && window.console.log) {
        console.log(msg);
      }
    },
    "getKeys": function(o) {
      var accumulator = [];
      for (var propertyName in o) {
        if (o.hasOwnProperty(propertyName)) {
          accumulator.push(propertyName);
        }
      }
      return accumulator;
    },
    "isArray": function(obj) {
      return (obj.constructor.toString().indexOf("Array") == -1) ? false : true;
    },
    "getValues": function(o, filter) {
      var accumulator = [];
      for (var property in o) {
        if (o.hasOwnProperty(property) && !filter.contains(property)) {
          accumulator.push(o[property]);
        }
      }
      return accumulator;
    },
    "unique": function(array) {
      var r = [];
      o: for ( var i = 0, n = array.length; i < n; i++) {
        for ( var x = 0, y = r.length; x < y; x++) {
          if (r[x] == array[i]) {
            continue o;
          }
        }
        r[r.length] = array[i];
      }
      return r;
    },
    "toArray": function(arrayLike) {
      if(jimUtil.isArray(arrayLike)) {
        return arrayLike;
      } else {
        var array = [];
        if(jimUtil.exists(arrayLike)) {
          if (typeof(arrayLike) === "string") {
            arrayLike = arrayLike.split(",");
          }
          for (var i=0, len = arrayLike.length; i < len; i+=1) {
            array.push(arrayLike[i]);
          }
        }
        return array;
      }
    },
    "escapeRegex": function(value) {
      var acEscape = [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^' ];
      var reReplace = new RegExp('(\\' + acEscape.join('|\\') + ')', 'g');
      return value.replace(reReplace, '\\$1');
    },
    "exists": function(o) {
      return (typeof o !== "undefined" && o !== null);
    },
    "getScreenName": function() {
      return jQuery("input[name=screen-name]").val();
    },
    "getCanvases": function() {
      return jQuery("input[name=canvases]").val().split(" ");
    },
    "hasCanvas": function(canvas) {
      return jimUtil.getCanvases().contains(canvas);
    },
    "viewportHeight": function() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body.clientHeight;
    },
    "viewportWidth": function() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body.clientWidth;
    },
    "scrollbarWidth": 0,
    "getScrollbarWidth": function() {
      /*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net) Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.*/
      if (jimUtil.scrollbarWidth === 0) {
        if (jQuery.browser.msie) {
          var $textarea1 = jQuery('<textarea cols="10" rows="2"></textarea>').css({position : 'absolute', top : -1000, left : -1000}).appendTo('body'),
          $textarea2 = jQuery('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({position : 'absolute', top : -1000, left : -1000}).appendTo('body');
          jimUtil.scrollbarWidth = $textarea1.width() - $textarea2.width();
          $textarea1.add($textarea2).remove();
        } else {
          var $div = jQuery('<div />').css({width : 100, height : 100, overflow : 'auto', position : 'absolute', top : -1000, left : -1000}).prependTo('body').append('<div />').find('div').css({width : '100%', height : 200});
          jimUtil.scrollbarWidth = 100 - $div.width();
          $div.parent().remove();
        }
      }
      return jimUtil.scrollbarWidth;
    },
    /* based on idea: http://onemarco.com/2008/11/12/callbacks-and-binding-and-callback-arguments-and-references/ */
    "createCallback": function(action, opts) {
      return function() {
        var args = opts.args ? opts.args : [];
        var scope = opts.scope ? opts.scope : this;
        var fargs = opts.supressArgs === true ? [] : jimUtil.toArray(arguments);
        action.apply(scope, fargs.concat(args));
      };
    },
    "isAnnotationInactive": function() {
      return (typeof(annotation) === "undefined" || !annotation.isActive());
    },
    "show": function($targets, args, callback) {
      var t, tLen, $target;      
          for(t=0, tLen=(jimUtil.exists($targets)) ? $targets.length : 0; t<tLen; t+=1) {
            var $target = jQuery($targets[t]);  
            if($target.jimGetType() === itemType.panel) {
              $target.siblings().addClass("hidden").hide().end().removeClass("hidden");
            }
              if($target.parent(".layout.horizontal").length) {
                $target.css("display", "inline-block");
              }
              if(args && args.effect) {
                /* TODO: add .stop() to interrupt animation */
                if($target.parent(".layout.horizontal").length) {
                  $target.css("display", "inline-block");
                }
                $target.hide().show(args.effect.type, {"direction": args.effect.direction}, args.effect.duration, callback);
              } else {
              if($target.parent(".layout.horizontal").length) {
                $target.css("display", "inline-block");
              } else {
                $target.show();
              }
            }
      }
      },
    "jimPointTo": function($target, settings) {
      if(jimUtil.exists($target) && $target.length) {
        var type = $target.jimGetType(), $parent, parent, position;
        switch(type) {
          case itemType.text:
          case itemType.password:
          case itemType.date:
          case itemType.time:
          case itemType.file:
            $target.find("input").focus();
            break;
          case itemType.checkbox:
          case itemType.radiobutton:
          case itemType.textarea:
            $target.focus();
            break;
          case itemType.dynamicpanel:
            jimUtil.jimPointTo($target.children(".panel:first"), settings);
            break;
          default:
            do {
              $parent = $target.parents(".firer:first");
              if($parent.is(".screen, .template")) {
                $parent = jQuery("#simulation");
              }
              parent = $parent[0];
              position = $target.position();
              if((parent.clientHeight !== 0 && parent.clientHeight < position.top) || (parent.clientWidth !== 0 && parent.clientWidth < position.left)) {
                $parent.animate({"scrollTop": parent.scrollTop + position.top, "scrollLeft": parent.scrollLeft + position.left}, 1000);
              }
              $target = $parent;
            } while(!$target.is("#simulation") && $parent.length);
            break;
        }
      }
    },
    "toHTML": function(value) {
      switch(typeof(value)) {
        case "string":
          value = value.toString();
          value = value.replace(/<br>/g, "\n");
          value = value.replace(/&/g, "&amp;");
          value = value.replace(/</g, "&lt;");
          value = value.replace(/>/g, "&gt;");
          value = value.replace(/"  "/g, " &nbsp;");
          value = value.replace(/\t/g, " &nbsp; &nbsp; &nbsp;");
          value = value.replace(/\r/g, "");
          value = value.replace(/\n/g, "<br />");
          break;
        case "boolean":
          value = value.toString();
          break;
      }
      return value;
    },
    "toJS": function(value) {
      switch(typeof(value)) {
        case "string":
          value = value.replace(/<br>/g, "\n");
          break;
      }
      return value;
    },
    "decodeURI": function(uri, force) {
      if(jQuery.browser.msie || force) {
        uri = uri.replace(/%25/g, "%");
        uri = uri.replace(/%2B/g, "\+");
        uri = uri.replace(/%2F/g, "\/");
        uri = uri.replace(/%3F/g, "\?");
        uri = uri.replace(/%23/g, "#");
        uri = uri.replace(/%26/g, "&");
        uri = uri.replace(/%20/g, " ");
      } else {
        try {
          uri = decodeURIComponent(uri);
        } catch (e) {
          uri = jimUtil.decodeURI(uri, true);
        }
      }
      return uri;
    },
    "encodeURI": function(uri) {
      if(jQuery.browser.msie) {
        uri = uri.replace(/%/g, "%25");
        uri = uri.replace(/\+/g, "%2B");
        uri = uri.replace(/\//g, "%2F");
        uri = uri.replace(/\?/g, "%3F");
        uri = uri.replace(/#/g, "%23");
        uri = uri.replace(/&/g, "%26");
        uri = uri.replace(/ /g, "%20");
        return uri;
      } else {
        return encodeURIComponent(uri);
      }
    },
    "insertInto": function(args) {
      var $target, $parent, position, event, $layout, $insert, $child, paneWidth, targetOffset, parentOffset, containment, point, positionType, x, y, index, insert, targetOffset, childOffset;
      $target = args.target;
      $parent = args.parent;
      position = args.position;
      event = args.event;
      if(jimUtil.exists($target) && jimUtil.exists($parent)) {
        if($parent.children($target.selector).length) { // already contained
          if(jimUtil.exists(position)) {
            $target.css({"position": position.type, "top": position.top, "left": position.left});
          }
        } else {
          $layout = $parent.children(".layout");
          if($layout.length > 0) {
            $insert = $layout.find("td.insertionpoint:first");
            switch($target.jimGetType()) {
              case itemType.group:
                positionType = "relative";
                break;
              default:
                positionType = "static";
                break;
            }
            insert = "append";
  
            if(jimUtil.exists(position) || jimUtil.exists(event) && event.type === "dragend") {
              if(jimUtil.exists(position)) {
                x = position.left;
                y = position.top;
                index = (!jimUtil.exists(position.index)) ? -1 : position.index;
              } else {
                targetOffset = $target.offset();
                x = targetOffset.left;
                y = targetOffset.top;
                index = -1;
              }
  
              $insert.children().each(function(i, child){
                $child = jQuery(child);
                if(index === i) {
                  insert = "before";
                } else {
                  childOffset = $child.offset();
                  if($insert.hasClass("vertical")) {
                    containment = {
                      "top": childOffset.top,
                      "bottom": childOffset.top + $child.outerHeight()
                    };
                    if(y <= containment.top) {
                      insert = "before";
                    } else if(containment.top <= y && y <= containment.bottom) {
                      insert = (y-containment.top < containment.bottom-y) ? "before" : "after";
                    }
                  } else {
                    containment = {
                      "left": childOffset.left,
                      "right": childOffset.left + $child.outerWidth()
                    };
                    if(x <= containment.left) {
                      insert = "before";
                    } else if(containment.left <= x && x <= containment.right) {
                      insert = (x-containment.left < containment.right-x) ? "before" : "after";
                    }
                  }
                }
                return (insert === "append");
              });
            }
  
            switch(insert) {
              case "before":
                $target.insertBefore($child).css({"position": positionType, "top": "", "left": ""});
                break;
              case "after":
                $target.insertAfter($child).css({"position": positionType, "top": "", "left": ""});
                break;
              case "append":
                $target.appendTo($insert).css({"position": positionType, "top": "", "left": ""});
                break;
            }
          } else {
            if(jimUtil.exists(position)) {
              $target.appendTo($parent).css({"position": position.type, "top": position.top, "left": position.left});
            } else {
              paneWidth = jimLayout.getPaneWidth();
              parentOffset = $parent.offset();
              parentOffset.left -= paneWidth;
              if(jimUtil.exists(position)) {
                targetOffset = position;
                positionType = "absolute";
              } else {
                targetOffset = $target.offset();
                targetOffset.left -= paneWidth;
                positionType = "absolute";
              }
              if(jimUtil.intersect($target, $parent)) {
                $target.appendTo($parent).css({"position": positionType, "top": targetOffset.top - parentOffset.top - parseInt($parent.css("border-top-width"),10), "left": targetOffset.left - parentOffset.left - parseInt($parent.css("border-left-width"),10)});
              } else {
                $target.appendTo($parent).css({"position": positionType, "top": "0px", "left": "0px"});
              }
            }
          }
        }
      }
    },
    "intersect": function(src, $over) {
      var target, targetOffset, over, overOffset;
      if(jimUtil.exists(src) && jimUtil.exists($over)) {
        if(src instanceof jQuery) {
          switch($over.jimGetType()) {
            case itemType.dynamicpanel:
              $over = ($over.children("div:visible").length === 0) ? $over.children(".default") : $over.children("div:visible:first");
              break;
          }
          targetOffset = src.offset(), overOffset = $over.offset();
          target = {
            "top": targetOffset.top,
            "left": targetOffset.left,
            "bottom": targetOffset.top + src.outerHeight(),
            "right": targetOffset.left + src.outerWidth()
          };
          over = {
            "top": overOffset.top,
            "left": overOffset.left,
            "bottom": overOffset.top + $over.outerHeight(),
            "right": overOffset.left + $over.outerWidth()
          };

          return (target.top >= over.top && target.bottom <= over.bottom) && (target.left >= over.left && target.right <= over.right);
        } else if (src instanceof jQuery.Event) {
          switch($over.jimGetType()) {
            case itemType.dynamicpanel:
              $over = ($over.children("div:visible").length === 0) ? $over.children(".default") : $over.children("div:visible:first");
              break;
          }
          overOffset = $over.offset();
          over = {
            "top": overOffset.top,
            "left": overOffset.left,
            "bottom": overOffset.top + $over.outerHeight(),
            "right": overOffset.left + $over.outerWidth()
          };
          return (over.top <= src.originalEvent.pageY && src.originalEvent.pageY <= over.bottom) && (over.left <= src.originalEvent.pageX && src.originalEvent.pageX <= over.right);
        }
      }
      return false;
    }
  }
  /* END UTILITY FUNCTIONS */

  // expose utilities to the global object
  window.itemType = itemType;
  window.jimUtil = jimUtil;
  window.Class = Class;
})(window);