(function() {
  var jq = document.createElement('script');
  jq.type = 'text/javascript';
  jq.async = true;
  jq.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(jq, s);
})();