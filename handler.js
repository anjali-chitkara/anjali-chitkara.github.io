// Intercept, dismiss the WebView, and open the tearsheet
window.addEventListener('DOMContentLoaded', function() {
  var aaplLink = document.querySelector('a[href="sofimobile://wealth/brokerage_tearsheet/AAPL"]');
  if (aaplLink) {
    aaplLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Dismiss the WebView
      window.location.href = 'sofimobile://dismiss';
      // Open the tearsheet
      setTimeout(function() {
        window.location.href = 'sofimobile://wealth/brokerage_tearsheet/AAPL';
      }, 500); // Adjust the timeout delay as needed
    });
  }
});
