const { lcm, gcd, generatePrime } = require('./Common.js')

test('generatePrime(10)', () => {
  expect(generatePrime(10)).toEqual(expect.arrayContaining([2, 3, 5, 7]));
});

test('gcd(1071, 462)', () => {
  expect(gcd(1071, 462)).toBe(21);
});

test('gcd(462, 1071)', () => {
  expect(gcd(462, 1071)).toBe(21);
});

test('lcm(1071, 462)', () => {
  expect(lcm(1071, 462)).toBe(23562);
});