const calculationResult = (num1, num2, operationType) => {
  if (operationType === '+'){
    return num1 + num2;
  } else if(operationType === '-') {
    return num1 - num2;
  } else if (operationType === '*'){
    return num1 * num2;
  } else if (operationType === '/' && num2 !== 0)  {
    return (num1 / num2).toFixed(2);
  } else if (operationType === '/' && num2 === 0) {
    return "Err: Can't divide by 0";
  } else {
    return "Err: Not a valid operation";
  }
}

const validateOperation = (operation, arrOperations) => (arrOperations.includes(operation));

const validateAllInput = (isNumOneValid, isNumTwoValid, isOperationValid) => (isNumOneValid && isNumTwoValid && isOperationValid);

const validateNum = (num) => (!isNaN(num));

module.exports.validateNum = validateNum;
module.exports.validateAllInput = validateAllInput;
module.exports.validateOperation = validateOperation;
module.exports.calculationResult = calculationResult;
