const result = (num1, num2, operationType) => {
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

module.exports = result;
