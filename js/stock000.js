// Forgive my sloppy-ass JS.

$(document).ready(function() {

  // HANG SENG
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22^HSI%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {

      // Declare your variables!
      var hsprice = '';
      var hspercent = '';
      // Find the last trade price.
      $.each(data.query.results, function(i, item) {
        hsprice += item['LastTradePriceOnly'];
        hspercent += item['ChangeinPercent'];
      });
      // Commas! Also this is probably a dumb way to do it.
      var hspricefin = numeral(hsprice).format('0,0.00');

      // If the percentage begins with a minus, make it red. Otherwise, it's green.
      if ((hspercent.substring(1, 0) == "-")) {
        $( '#arr6' ).removeClass( "fa-arrow-circle-up" ).addClass( "fa-arrow-circle-down" );
        $( '#arr6' ).next().children( "span.percentage" ).css( 'background', '#c0392b' );
      } else {
        $( '#arr6' ).removeClass( "fa-arrow-circle-down" ).addClass( "fa-arrow-circle-up" );
        $( '#arr6' ).next().children( "span.percentage" ).css( 'background', '#2bc04b' );
      }
      // Then, cut off the percentage and minus symbol.
      var hspercentfin = (hspercent).substring(1, (hspercent).length-1);
      // Put that price up there.
      $('#hsprice').append(hspricefin);
      $('#hspercent').append(hspercentfin);
  });

});
