(function (window, undefined) {
	jQuery("#simulation")
    .click(function(event) {
      var $eventFirer, $dd, $options, position, $option, $options, oldValue, newValue, $sl;    
      if(jimUtil.isAnnotationInactive()) {
        jQuery(".options").hide(); // hide all open dropdown options
        $eventFirer = jQuery(event.target || event.srcElement);
        if($eventFirer.hasClass("dateicon")) {
          if($eventFirer.attr("readonly") !== "readonly") {
            $eventFirer.prev().children(":first").datepicker({"showOn": "button", "buttonImage": "_jim/images/common/date.gif", "buttonImageOnly": true}).next().click();
          }
        } else if($eventFirer.hasClass("timeicon")) {
          if($eventFirer.attr("readonly") !== "readonly") {
            $eventFirer.prev().children(":first").datetimepicker({"showOn": "button", "buttonImage": "_jim/images/common/time.gif", "buttonImageOnly": true}).next().click();
          }
        } else if($eventFirer.closest(".dropdown").length) {
          $dd = $eventFirer.closest(".dropdown");
          if(!$dd.data("treated")) {
            $dd.data("treated", true);
            $options = $dd.children(".options");
            $dd
              .data("options", $options)
              .bind("toggle", function(event) {
                if ($dd.attr("readonly") !== "readonly") {
                  position = $dd.jimPosition();
                  $options.css({"top": position.bottom + "px", "left": position.left + "px"});
                  $options.slideToggle(200);
                }
              });
            $options
              .data("dropdown", $dd)
              .click(function(event) {
                if (jimUtil.isAnnotationInactive()) {
                  $option = jQuery(event.target || event.srcElement).closest(".option");
                  $options = $option.parent();
                  $dd = $options.data("dropdown");
                  oldValue = $dd.children(".value").val();
                  newValue = $option.text();
                  $options.hide();
                  if (oldValue !== newValue) {
                    $options.find(".option").removeClass("selected");
                    $option.addClass("selected");
                    $dd.find(".value").val(newValue);//.textOverflow("...", true);
                    $dd.trigger("change");
                  }
                }
              })
              .appendTo("#simulation");
          }
          $dd.trigger("toggle");
        } else if($eventFirer.closest(".selectionlist, .multiselectionlist").length) {
          $sl = $eventFirer.closest(".selectionlist, .multiselectionlist");
          if (jimUtil.isAnnotationInactive() && $sl.attr("readonly") !== "readonly") {
            oldValue = $sl.find(".selected").text();
            if (!jimUtil.exists($sl.attr("multiple")) || $sl.attr("multiple") !== "multiple") {
              $sl.find(".option").removeClass("selected");
            }
            $option = $(event.target || event.srcElement).closest(".option").toggleClass("selected");
            newValue = $sl.find(".selected").text();
            if (oldValue !== newValue) {
              $sl.trigger("change");
            }
          }
        } else if (($eventFirer.closest(".text").length || $eventFirer.closest(".password").length) && !jQuery(event.target).is(":input")) {
          $eventFirer.children("input").focus();
        }
      }      
    })
    .bind("loadcomponent", function(event) {
      if(typeof(jQuery.fn.jimTree) === "function") {
        jQuery(".tree").jimTree();
      }
      if(typeof(jQuery.fn.datagrid) === "function") {
        jQuery(".datagrid").datagrid();
      }
    })
    .delegate("input:file", "change", function(event) {
      jQuery(this).prev().prev().children("input").val(this.value).parent().trigger("change");
    });
})(window);