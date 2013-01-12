(function (window, undefined) {
  jQuery("#simulation")
  .delegate(".datagrid", "update.datagrid", function(event){
    event.stopPropagation();
    var $grid = jQuery(event.target || event.srcElement).closest(".datagrid");
    $grid.find(".datarow:visible").filter(":odd").removeClass("odd").addClass("even").end().filter(":even").removeClass("even").addClass("odd");
    jQuery(".summary[datagrid="+$grid.attr("id")+"]").trigger("update.datagrid", [$grid]);
    jQuery(".index[datagrid="+$grid.attr("id")+"]").trigger("update.datagrid", [$grid]);
  })
  .delegate(".summary", "update.datagrid", function(event, $grid) {
    event.stopPropagation();
    var $summary, size, total, start, end;
    $summary = jQuery(this);
    size = parseInt($grid.attr("size"), 10);
    total = $grid.find(".datarow").length;
    start = $grid.find(".datarow:visible:first").index() + 1;
    end = (size === 0) ? total : start + size - 1;
    if (end > total) {
      end = total;
    }
    $summary.children("#total").text(total).next("#start").text(start).next("#end").text(end);
  })
  .delegate(".index", "update.datagrid", function(event, $grid) {
    event.stopPropagation();
    var $index , size, current, total, c;
    $index = jQuery(this);
    size = parseInt($grid.attr("size"), 10);
    current = Math.floor($grid.find(".datarow:visible:first").index() / size) + 1;
    if(isNaN(current)) {
      current = 1;
    }
    total = (size === 0) ? 1 : Math.ceil($grid.find(".datarow").length / size);
    $index.html("");
    for (c=1; c <= total; c += 1) {
      $index.append((current === c) ? "<span class=\"current\">" + c + "</span>" : "<span>" + c + "</span>");
    }
  });
  
  var gridMethods = {
    "init": function() {
      return this.each(function(i, grid) {
        var $grid = jQuery(grid);
        if($grid.hasClass("datagrid")) {
          $grid.datagrid("update", jimData.datamasters[$grid.attr("datamaster")], {"init": true});
        }
      });
    },
    "update": function(instances, options) {
      var $grid = jQuery(this), subGrids, i, iLen, tmpInstances, $subGrid;
      if (jimUtil.exists(instances)) {
        if(instances === "" || (jQuery.isArray(instances) && instances.length === 0)) {
          $grid.find(".datarow").remove();
          $grid.trigger("update.datagrid");
        } else {
          if(!jimUtil.isArray(instances)) {
            instances = jimUtil.toArray(instances);
          } else if (jQuery.browser.msie && jimMain.isPopup(window)) { // IE bug: popup window converts array to object
            tmpInstances = [];
            for (i=0, iLen=instances.length; i<iLen; i+=1) {
              tmpInstances.push(instances[i]);
            }
            instances = tmpInstances;
          }
          if(instances[0] && instances[0]["_datamaster"] === $grid.attr("datamaster")) {
            $grid.find(".datarow").remove();
            $grid.children("tbody").html(jQuery("style[title=" + $grid.attr("id") + "-gridtemplate]").render(instances));
            $grid.trigger("update.datagrid");
            if(options) {
              if(options.init) {
                $grid.find(".datagrid").datagrid();
              } else if (options.type === "pageload") {
                $grid.find(".pageload").trigger("pageload");
              }
            }
          }
        }
      }
    }
  };
  
  jQuery.fn.datagrid = function(method) {
    if (gridMethods[method]) {
      return gridMethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof(method) === 'object' || !method) {
      return gridMethods.init.apply(this, arguments);
    } else {
      jQuery.error("Method " +  method + " does not exist.");
    }
  };
})(window);