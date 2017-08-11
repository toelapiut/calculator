function Calculator(operator) {
  this.operator = operator;
}
Calculator.prototype.add = function(number1, number2) {
  return number1 + number2;
};

Calculator.prototype.divide = function(number1, number2) {
  return number1 / number2;
};

Calculator.prototype.multiply = function(number1, number2) {
  return number1 * number2;
};

Calculator.prototype.minus = function(number1, number2) {
  return number1 - number2;
};

Calculator.prototype.modulas = function(number1, number2) {
  return number1 % number2;
};

exports.calculatorModule=Calculator;
