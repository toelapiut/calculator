var Calculator = require('./../js/index.js').calculatorModule;

$(document).ready(function() {
  $('form#blanks').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('input#number1').val());
    var number2 = parseInt($('input#number2').val());
    var simpleCalculator = new Calculator('mathematical');
    $('#add').click(function() {
      $('#output').text(number1 + " " + "+" + " " + number2 + " " + "=" + " " + simpleCalculator.add(number1, number2));

    });
    $('#minus').click(function() {
      $('#output').text(number1 + " " + "-" + " " + number2 + " " + "=" + " " + simpleCalculator.minus(number1, number2));
    });
    $('#multiply').click(function() {
      $('#output').text(number1 + " " + "*" + " " + number2 + " " + "=" + " " + simpleCalculator.multiply(number1, number2));
    });
    $('#divide').click(function() {
      $('#output').text(number1 + " " + "/" + " " + number2 + " " + "=" + " " + simpleCalculator.divide(number1, number2));
    });
    $('#modulas').click(function() {
      $('#output').text(number1 + " " + "%" + " " + number2 + " " + "=" + " " + simpleCalculator.modulas(number1, number2));
    });
  });
});
