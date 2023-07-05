// Intercept and dismiss the WebView, and open the tearsheet link
window.addEventListener('DOMContentLoaded', function() {
  var aaplLink = document.querySelector('a[href="sofimobile://wealth/brokerage_tearsheet/AAPL"]');
  if (aaplLink) {
    aaplLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'sofimobile://wealth/brokerage_tearsheet/AAPL';
    });
  }
});
