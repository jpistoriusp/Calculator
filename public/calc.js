function start() {
  $('number').on('click', function(e) {
    e.preventDefault();
     $('#clear');
      console.log('ready');
      console.log('test');

  });
}
$(document).ready(function() {

  start();

  console.log('test');

});
var calc = function(oper, value1, value2) {
  switch (oper) {
    case '+': total = value1 + value2;
      break;
    case '-': total = value1 - value2;
      break;
    case '*': total = value1 * value2;
      break;
    case '/': total = value1 / value2;
      break;
    default:
  }
}
