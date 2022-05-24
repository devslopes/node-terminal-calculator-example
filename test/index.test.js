const { calculationResult, validateAllInput, validateNum, validateOperation} = require('../include.js');

describe('Testing the calculation results', () => {
  test('Valid nums, valid operation Add', () => {
    expect(calculationResult(1, 2, '+')).toBe(3);
  });
  test('Valid nums, valid operation Subtract', () => {
    expect(calculationResult(4, 3, '-')).toBe(1);
  });
  test('Valid nums, valid operation Multiply', () => {
    expect(calculationResult(4, 3, '*')).toBe(12);
  });
  test('Valid nums, valid operation Divide', () => {
    expect(calculationResult(16, 8, '/')).toBe("2.00");
  });
  test('Devide By 0 returns an error', () => {
    expect(calculationResult(4, 0, '/')).toBe("Err: Can't divide by 0");
  });
})

describe("Testing if all the input is correct", () => {
  test('All the input is correct', () => {
    expect(validateAllInput(true, true, true)).toBe(true);
  });
  test('All the input is incorrect', () => {
    expect(validateAllInput(false, false, false)).toBe(false);
  });
  test('NumOne is incorrect', () => {
    expect(validateAllInput(false, true, true)).toBe(false);
  });
  test('Operation is incorrect', () => {
    expect(validateAllInput(true, true, false)).toBe(false);
  });
  test('Only NumOne is correct', () => {
    expect(validateAllInput(true, false, false)).toBe(false);
  });
});

describe("Testing num to be of type Number", () => {
  test('Number num returns true', () => {
    expect(validateNum(2)).toBe(true);
  });
  test('String num returns true', () => {
    expect(validateNum('2')).toBe(true);
  });
  test('String Text returns false', () => {
    expect(validateNum('sdfdsf')).toBe(false);
  });
});

describe("Testing an operation to be valid", () => {
  let arrOperations = ["+", "-", "*", "/"];
  test('Add returns true', () => {
    expect(validateOperation('+', arrOperations)).toBe(true);
  });
  test('Subtract returns true', () => {
    expect(validateOperation('-', arrOperations)).toBe(true);
  });
  test('Multiply returns true', () => {
    expect(validateOperation('*', arrOperations)).toBe(true);
  });
  test('Divide returns true', () => {
    expect(validateOperation('/', arrOperations)).toBe(true);
  });
  test('Brace returns false', () => {
    expect(validateOperation('(', arrOperations)).toBe(false);
  });
  test('Random text returns false', () => {
    expect(validateOperation('+dsfsdf', arrOperations)).toBe(false);
  });
  test('Number returns false', () => {
    expect(validateOperation(2, arrOperations)).toBe(false);
  });
});

