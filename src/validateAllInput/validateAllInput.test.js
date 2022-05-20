const validateAllInput = require('./validateAllInput');

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
