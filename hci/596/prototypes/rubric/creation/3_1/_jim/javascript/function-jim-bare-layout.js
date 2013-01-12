(function(window, document, undefined) {

  var jimLayout = {
    "$simulation": jQuery("#simulation"),
    "getPaneWidth": function() {
      return jimLayout.$simulation.position().left;
    },
    "debug": function() {
      alert("\t\t\theight\twidth\n"+
          "simulation:\t"+jimLayout.$simulation[0].clientHeight + "\t\t" + jimLayout.$simulation[0].clientWidth + "\n" +
          "minimum:\t\t"+parseInt(jimLayout.$simulation.css("min-height"),10) + "\t\t" + parseInt(jimLayout.$simulation.css("min-width"),10) + "\n" +
          "screen:\t\t"+jimLayout.$simulation.height() + "\t\t" + jimLayout.$simulation.width() + "\n" +
          "htmlOffset:\t"+document.body.offsetHeight + "\t\t" + document.body.offsetWidth + "\n" +
          "htmlClient:\t"+document.body.clientHeight + "\t\t" + document.body.clientWidth + "\n" +
          "htmlScroll:\t"+document.body.scrollHeight + "\t\t" + document.body.scrollWidth + "\n");
    }
  };

  window.jimLayout = jimLayout;
})(window, document);