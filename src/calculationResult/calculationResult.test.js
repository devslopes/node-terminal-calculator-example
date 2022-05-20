const calculationResultTest = require('./calculationResult');

describe('Testing the calculation results', () => {
  test('Valid nums, valid operation Add', () => {
    expect(calculationResultTest(1, 2, '+')).toBe(3);
  });
  test('Valid nums, valid operation Subtract', () => {
    expect(calculationResultTest(4, 3, '-')).toBe(1);
  });
  test('Valid nums, valid operation Multiply', () => {
    expect(calculationResultTest(4, 3, '*')).toBe(12);
  });
  test('Valid nums, valid operation Divide', () => {
    expect(calculationResultTest(16, 8, '/')).toBe("2.00");
  });
  test('Invalid operation returns an error', () => {
    expect(calculationResultTest(1, 2, 'sdfdsf')).toBe("Err: Not a valid operation");
  });
  test('Devide By 0 returns an error', () => {
    expect(calculationResultTest(4, 0, '/')).toBe("Err: Can't divide by 0");
  });
})
