// fibonacci.test.js
const { fibonacci } = require('./fibonacci');

test('fibonacci of 0 is 0', () => expect(fibonacci(0)).toBe(0));
test('fibonacci of 1 is 1', () => expect(fibonacci(1)).toBe(1));
test('fibonacci of 2 is 1', () => expect(fibonacci(2)).toBe(1));
test('fibonacci of 7 is 13', () => expect(fibonacci(7)).toBe(13));
