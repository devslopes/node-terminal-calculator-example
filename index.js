const rs = require('readline-sync');
const validateOperation = require('./src/validateOperation/validateOperation');
const validateNum = require('./src/validateNum/validateNum');
const validateAllInput = require('./src/validateAllInput/validateAllInput');
const calculationResult = require('./src/calculationResult/calculationResult');

const validOperations = ["+", "-", "*", "/"];

const operation = rs.question(
  'What operation would you like to perform? (+ - * /): ',
  {limit: validOperations, limitMessage:"This is not a valid operation"}
);
const options = operation === '/'
  ? {limit: function(input) {return input !== '0' && !isNaN(input) }, limitMessage: "This is not a valid number"}
  : {limit: function(input) {return !isNaN(input)}, limitMessage: "This is not a valid number"};

const num1 = rs.questionInt('What is the first number? ', {limitMessage: "This is not a valid number"});
const num2 = +rs.question('What is the second number? ', options);

const isOperationValid = validateOperation(operation, validOperations);
const isNumOneValid = validateNum(num1);
const isNumTwoValid = validateNum(num2);
const isUserInputValid = validateAllInput(isNumOneValid, isNumTwoValid, isOperationValid);

if (isUserInputValid) {
  console.log("The result is ", calculationResult(num1, num2, operation));
}

module.exports = calculationResult;
