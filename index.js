const rs = require('readline-sync');

const operation = rs.question(
  'What operation would you like to perform? + - * /',
  {limit: ["+", "-", "*", "/"], limitMessage:"This is not a valid operation"}
);

const options = operation === '/'
  ? {limit: function(input) {return input !== '0' && !isNaN(input) }, limitMessage: "This is not a valid number"}
  : {limit: function(input) {return !isNaN(input)}, limitMessage: "This is not a valid number"};

const num1 = rs.questionInt('What is the first number? ', {limitMessage: "This is not a valid number"});
const num2 = rs.question('What is the second number? ', options);

function result(num1, num2) {
  let result;
  if (operation === '+'){
    result = +num1 + +num2;
  } else if(operation === '-') {
    result = +num1 - +num2;
  } else if(operation === '*'){
    result = +num1 * +num2;
  } else {
    result = +num1 / +num2;
  }
  console.log("The result is ", result);
}

result(num1, num2);
