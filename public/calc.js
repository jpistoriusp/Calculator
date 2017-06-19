$(document).ready(function() {
  console.log('test');
  var val = 0;
  var val2 = 0;
  var tval = 0;
  var op = null;
  $('.number').on('click', function() {
     val = $(this).text();
     if (tval === 0) {
       tval = val;
     }
     else {
       tval = tval + val
     }
     $('#display').text(tval);

  });
  $('.operator').on('click', function() {
     if ($(this).text() !== '=') {
     op = $(this).text();
     $('#display').text(op);
     val2 = tval;
     tval = 0;
      }
  });
  $('#clear').on('click', function() {
    $('#display').text('');
  });
  $('#equals').on('click', function() {
    calc(op, val2, tval);
  });
});

var calc = function(oper, value1, value2) {
  var total = 0;
  switch (oper) {
    case '+': total = parseFloat(value1) + parseFloat(value2);
      break;
    case '-': total = value1 - value2;
      break;
    case 'X': total = value1 * value2;
      break;
    case '/': total = value1 / value2;
      break;
    default:
  }
  $('#display').text(total)
}
