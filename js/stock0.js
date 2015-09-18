// Forgive my sloppy-ass JS.

$(document).ready(function() {

  // S&P
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22^GSPC%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {

      // Declare your variables!
      var spprice = '';
      var sppercent = '';
      // Find the last trade price.
      $.each(data.query.results, function(i, item) {
        spprice += item['LastTradePriceOnly'];
        sppercent += item['ChangeinPercent'];
      });
      // Commas! Also this is probably a dumb way to do it.
      var sppricefin = numeral(spprice).format('0,0.00');

      // If the percentage begins with a minus, make it red. Otherwise, it's green.
      if ((sppercent.substring(1, 0) == "-")) {
        $( '#arr2' ).removeClass( "fa-arrow-circle-up" ).addClass( "fa-arrow-circle-down" );
        $( '#arr2' ).next().children( "span.percentage" ).css( 'background', '#c0392b' );
      } else {
        $( '#arr2' ).removeClass( "fa-arrow-circle-down" ).addClass( "fa-arrow-circle-up" );
        $( '#arr2' ).next().children( "span.percentage" ).css( 'background', '#2bc04b' );
      }
      // Then, cut off the percentage and minus symbol.
      var sppercentfin = (sppercent).substring(1, (sppercent).length-1);
      // Put that price up there.
      $('#spprice').append(sppricefin);
      $('#sppercent').append(sppercentfin);
  });

});
