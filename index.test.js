const resultFunction = require('./index');

test('Sometest', () => {
  expect(resultFunction(1, 2, '+')).toBe(3);
})

