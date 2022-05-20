const validateOperation = require('./validateOperation');

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
