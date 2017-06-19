
$(document).ready(function() {
  console.log('test');
  $('number').on('click', function(e) {
    e.preventDefault();
    //  $('#clear');
     console.log($('number').text());
     console.log('hi');
  });
  $('#clear').on('click', function(e) {
    $('#display').text('');
  });
});

var calc = function(oper, value1, value2) {
  var total = 0;
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
  $('#display').text(total)
}
