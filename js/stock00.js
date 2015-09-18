// Forgive my sloppy-ass JS.

$(document).ready(function() {

  // NIKKEI
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22^N225%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {

      // Declare your variables!
      var nkprice = '';
      var nkpercent = '';
      // Find the last trade price.
      $.each(data.query.results, function(i, item) {
        nkprice += item['LastTradePriceOnly'];
        nkpercent += item['ChangeinPercent'];
      });
      // Commas! Also this is probably a dumb way to do it.
      var nkpricefin = numeral(nkprice).format('0,0.00');

      // If the percentage begins with a minus, make it red. Otherwise, it's green.
      if ((nkpercent.substring(1, 0) == "-")) {
        $( '#arr5' ).removeClass( "fa-arrow-circle-up" ).addClass( "fa-arrow-circle-down" );
        $( '#arr5' ).next().children( "span.percentage" ).css( 'background', '#c0392b' );
      } else {
        $( '#arr5' ).removeClass( "fa-arrow-circle-down" ).addClass( "fa-arrow-circle-up" );
        $( '#arr5' ).next().children( "span.percentage" ).css( 'background', '#2bc04b' );
      }
      // Then, cut off the percentage and minus symbol.
      var nkpercentfin = (nkpercent).substring(1, (nkpercent).length-1);
      // Put that price up there.
      $('#nkprice').append(nkpricefin);
      $('#nkpercent').append(nkpercentfin);
  });

});
