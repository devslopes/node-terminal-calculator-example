const rs = require('readline-sync');
const { calculationResult, validateAllInput, validateNum, validateOperation} = require('./include.js');

const validOperations = ["+", "-", "*", "/"];

const operation = rs.question(
  'What operation would you like to perform? (+ - * /): ',
  {limit: validOperations, limitMessage:"This is not a valid operation"}
);

const optionReturn = (input) => (operation === '/' ? (input !== '0' && !isNaN(input)) : !isNaN(input));
const options = {limit: function(input) {return optionReturn(input)}, limitMessage: "This is not a valid number"};

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
