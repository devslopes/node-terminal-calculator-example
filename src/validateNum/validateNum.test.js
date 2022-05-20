const validateNum = require('./validateNum');

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
