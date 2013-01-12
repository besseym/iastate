(function (window, undefined) {
  var jimMain, $simulation = jQuery("#simulation");
  /* START MAIN FUNCTIONS */
  window.popups = [];
  jimMain = {
    "getMainWindow": function(windowRef) {
      var w = windowRef || window;
      return (jimMain.isPopup(w)) ? jimMain.getMainWindow(w.opener) : w;
    },
    "isPopup": function(window) {
      return window && window.opener && window.opener.jim;
    },
    "load": function(target, args) {
      var url, popup; 
      if (target && args) {
        url = (args.isexternal) ? target : jimUtil.encodeURI(target) + ".html";
        if (args.popup) {
          if (args.popup.iscentered) {
            args.left = (screen.availWidth - args.width) / 2;
            args.top = (screen.availHeight - args.height) / 2;
          }
          popup = window.open(url, "", "width=" + args.popup.width + ",height=" + args.popup.height + ",top=" + args.popup.top + ",left=" + args.popup.left + ",scrollbars=" + args.popup.hasscrollbars + ",resizable=" + args.popup.isresizable + ",menubar=" + args.popup.hasmenubar + ",toolbar=" + args.popup.hastoolbar + ",status=" + args.popup.hasstatusbar + ",location=" + args.popup.haslocationbar);
          window.jim = true;
          popup.focus();
          window.popups.push(popup);
        } else {
          if (jimMain.isPopup(window)) {
            jimMain.getMainWindow().location.href = url;
            window.close();
          } else {
            window.location.href = url;
          }
        }
      }
    },
    "unload": function() {
      jQuery(".screen.pageunload, .screen .pageunload").trigger("pageunload");
      jQuery(".template.pageunload, .template .pageunload").trigger("pageunload");
    },
    "loadContent": function() {
      jQuery(document).ready(function() {
        $simulation.trigger("loadcomponent");
        jQuery(".screen.pageload, .screen .pageload").trigger("pageload");
        jQuery(".template.pageload, .template .pageload").trigger("pageload");
        if(/iPhone/.test(navigator.userAgent)) {
          setTimeout(function(){window.scrollTo(0,0);},0);
        }
      });
    }
  };
  
  window.jimMain = jimMain; // expose to the global object
  /* END MAIN FUNCTIONS */
  
  jQuery(window)
    .load(function() {
      jimData.load(window);
      jimMain.loadContent();
    })
    .unload(function() {
      for(var p=0, pLen=window.popups.length; p<pLen; p+=1) {
        window.popups[p].close();
      }
      jimMain.unload();
      jimData.unload(window);
    });
})(window);