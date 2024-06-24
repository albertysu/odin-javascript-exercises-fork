const add = function() {
  let args = Array.from(arguments);
  return args.reduce((total, cur) => total + cur);
};

const subtract = function() {
	let args = Array.from(arguments);
  return args.reduce((total, cur) => total - cur);
};

const sum = function(array) {
  return array.reduce((total, cur) => total + cur, 0);
};

const multiply = function() {
  let args = Array.from(arguments);
  return args.reduce((total, cur) => total * cur, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if (num == 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
