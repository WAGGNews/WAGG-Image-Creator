// Based off this jsfiddle http://jsfiddle.net/8ypxW/3/
// I can't find the original author. Anybody who knows, hmu.

$(function() {
  // Quote
  $("#saveQuote").click(function() {
      html2canvas($("#q"), {
          onrendered: function(canvas) {
              theCanvas = canvas;
              document.body.appendChild(canvas);

              // Convert and download as image
              Canvas2Image.saveAsPNG(canvas);
              $("#qout").append(canvas);
              document.body.removeChild(canvas);
          }
      });
  });

  // Stocks
  $("#saveStocks").click(function() {
      html2canvas($("#s"), {
          onrendered: function(canvas) {
              theCanvas = canvas;
              document.body.appendChild(canvas);

              // Convert and download as image
              Canvas2Image.saveAsPNG(canvas);
              $("#sout").append(canvas);
              document.body.removeChild(canvas);
          }
      });
  });
});
