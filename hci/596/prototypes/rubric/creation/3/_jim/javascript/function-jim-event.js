(function(window, undefined) {
  var jimEvent = (function() {
    var jimEvent = function(event) {
      return new jimEvent.fn.init(event);
    };
    jimEvent.pauseStack = [];
    jimEvent.fn = jimEvent.prototype = {
      constructor: jimEvent,
      event: {},
      dragoverStack: [],
      init: function(event) {
        this.event = event;
        return this;
      }
    };
    jimEvent.fn.init.prototype = jimEvent.fn;

    /*********************** START STATIC EVENT FUNCTIONS ************************/
    jQuery.extend(jimEvent, {
      "clearPauseStack": function() {
        while(jimEvent.pauseStack.length) {
          clearTimeout(jimEvent.pauseStack.pop());
        }
      },
      "tryDateConversion": function(value) {
        switch(typeof(value)) {
          case "string":
            if(value.match(/^(19|20)\d\d([\- \/\.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])/) || // check for date conversion: yyyy-mm-dd
                value.match(/^(0[1-9]|[12][0-9]|3[01])([\- \/\.])(0[1-9]|1[012])\2(19|20)\d\d/) || // check for date conversion: dd-mm-yyyy
                value.match(/^(0[1-9]|1[012])([\- \/\.])(0[1-9]|[12][0-9]|3[01])\2(19|20)\d\d/)    // check for date conversion: mm-dd-yyyy
            ) {
              value = new Date(value);
            }
            break;
        }
        return value;
      },
      "tryBooleanConversion": function(value) {
        var testFalse, testTrue, trimmedValue;
        switch(typeof(value)) {
          case "string":
            testFalse = new RegExp("^false$", "i");
            testTrue = new RegExp("^true$", "i");
            trimmedValue = jQuery.trim(value);
            if(testFalse.test(trimmedValue)) {
              return false;
            } else if (testTrue.test(trimmedValue)) {
              return true;
            }
            break;
        }
        return value;      
      },
      "tryNumberConversion": function(value) {
        var result = value;
        switch(typeof(value)) {
          case "string":
            if(value.match(/^[\-+]?(?:(?:(?:\d{1,3})[,](?=\d\d\d))+(?:\d\d\d)(?:[\.]\d*)?|\d*(?:[\.]\d*)?)$/)) { // check for number conversion
              result = parseFloat(value.replace(/,/g, ""));
            } else if (value.match(/^[\-+]?(?:(?:(?:\d{1,3})[\.](?=\d\d\d))+(?:\d\d\d)(?:[,]\d*)?|\d*(?:[,]\d*)?)$/)) { // check for number conversion
              result = parseFloat(value.replace(/\./g, "").replace(",", "."));
            }
            if(isNaN(result)) {
              result = value;
            }
            break;
          case "number":
            // TODO: precision, trailing zeros
            break;
        }
        return result    
      },
      "tryStringConversion": function(value) {
        switch(typeof(value)) {
          case "string":
            return value;
          case "object":
            return (jQuery.isEmptyObject(value)) ? null : jQuery("<div>" + value.toString() + "</div>").text(); 
          default:
            return jQuery("<div>" + value.toString() + "</div>").text();    
        }
      },
      "isInDataDataRow": function($target) {
        return ($target.closest(".datarow").length === 0) ? false : true;
      },
      "isNumber": function(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
      },
      "printObjectProperties": function(o) {
        var value = "", property;
        if(jimUtil.exists(o) && typeof(o) === "object" && !jQuery.isEmptyObject(o)) {
          for (property in o) {
            if (property !== "_id" && property !== "_datamaster") {
              value += o[property] + ",";
            }
          }
          value = value.substring(0, value.length-1); // remove last ,
        }
        return value;
      },
      "getHtml": function(type, values, $component) {
        var html = "", option, isHorizontal, property, readonly, type, i;
        switch(type) {
          case itemType.dropdown:
          case itemType.selectionlist:
          case itemType.multiselectionlist:
            for(i = 0; i < values.length; i += 1) {
              option = values[i];
              if (jimUtil.exists(option) && jimUtil.exists(option.value)) {
                option = jimUtil.toHTML(option.value);
              } else if (typeof(option) === "object") {
                option = jimUtil.toHTML(jimEvent.printObjectProperties(option));
              } else {
                option = jimUtil.toHTML(option);
              }
              html += "<div class=\"option\">"+option+"</div>";
            }
            break;
          case itemType.radiobuttonlist:
          case itemType.checkboxlist:
            isHorizontal = $component.css("width") === "100%";
            property = $component.attr("name");
            property = (property === undefined) ? "name=\""+$component.attr("id")+"\"" : "name=\""+property+"\"";
            readonly = $component.attr("readonly");
            readonly = (readonly === undefined) ? "" : "disabled=\"disabled\""; 
            type = (type === itemType.radiobuttonlist) ? "radio" : "checkbox";
            if(isHorizontal) { html += "<tr>"; }
            for(i = 0; i < values.length; i += 1) {
              option = values[i];
              if (option.value !== undefined) {
                option = jimUtil.toHTML(option.value);
              } else if (typeof(option) === "object") {
                option = jimUtil.toHTML(jimEvent.printObjectProperties(option));
              } else {
                option = jimUtil.toHTML(option);
              }
              if(!isHorizontal) { html += "<tr>"; }
              html += "<td><input type=\""+type+"\" "+property+" value=\""+option+"\" "+readonly+" onclick=\"this.blur();\" /><span>"+option+"</span></td>";
              if(!isHorizontal) { html += "</tr>"; }
            }
            if(isHorizontal) { html += "</tr>"; }
            break;
        }
        return html;
      }
    });
    /************************ END STATIC EVENT FUNCTIONS *************************/
    
    return jimEvent;
  })(); 
  
  window.jimEvent = jimEvent;
  
  /*********************** START SPECIAL EVENT DELEGATION ************************/
  jQuery("html")
    .bind("keydown", function(event) {
      if(event.which === 9) { // prevent TAB key
        return false;
      }
    })
    .bind("keyup", function(event) {
      jimEvent(event).getEventFirer().trigger("keypressed", [{"altKey":event.altKey, "ctrlKey":event.ctrlKey, "shiftKey": event.shiftKey, "which":event.which}]);
    })
    .bind("mouseup", function(event) {
      if(event.button === 2) {
        var jFirer = jimEvent(event).getEventFirer();
        jFirer.trigger("rightclick");
        if(jFirer.hasClass("screen")) {
          jQuery(".template").trigger("rightclick");
        }
      }
    })
    .bind("click dblclick", function(event) {
      var jFirer = jimEvent(event).getEventFirer();
      if(jFirer.hasClass("screen")) {
        jQuery(".template").trigger(event.type);
      }
    });
  /************************** END SPECIAL EVENT DELEGATION ************************/
})(window);