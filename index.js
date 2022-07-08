const rs = require('readline-sync');

const operationsObj = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}

const operations = Object.keys(operationsObj);

const operation = rs.question(
  'What operation would you like to perform? [+ - * /]: ',
  {limit: operations, limitMessage:"This is not a valid operation"}
);

const options = operation === '/'
  ? {limit: function(input) {return input !== '0' && !isNaN(input) }, limitMessage: "This is not a valid number"}
  : {limit: function(input) {return !isNaN(input)}, limitMessage: "This is not a valid number"};

const num1 = rs.questionInt('What is the first number? ', {limitMessage: "This is not a valid number"});
const num2 = +rs.question('What is the second number? ', options);

console.log(`The result is ${operationsObj[operation](num1, num2)}`);
