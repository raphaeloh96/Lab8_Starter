// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Tests for isPhoneNumber()
test('isPhoneNumber(\'123-456-7890\') = true', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber(\'777-777-7777\') = true', () => {
  expect(functions.isPhoneNumber('777-777-7777')).toBe(true);
});

test('isPhoneNumber(\'12345-678\') = false', () => {
  expect(functions.isPhoneNumber('12345-678')).toBe(false);
});

test('isPhoneNumber(\'12-345-678\') = false', () => {
  expect(functions.isPhoneNumber('12-345-678')).toBe(false);
});

// Tests for isEmail()
test('isEmail(\'ryoh@ucsd.edu\') = true', () => {
  expect(functions.isEmail('ryoh@ucsd.edu')).toBe(true);
});

test('isEmail(\'test@test.com\') = true', () => {
  expect(functions.isEmail('test@test.com')).toBe(true);
});

test('isEmail(\'ryoh@ucsd!edu\') = false', () => {
  expect(functions.isEmail('ryoh@ucsd!edu')).toBe(false);
});

test('isEmail(\'#test@test.com\') = false', () => {
  expect(functions.isEmail('#test@test.com')).toBe(false);
});

// Tests for isStrongPassword()
test('isStrongPassword(\'TBR72Pr_\') = true', () => {
  expect(functions.isStrongPassword('TBR72Pr_')).toBe(true);
});

test('isStrongPassword(\'Qay8230yE\') = true', () => {
  expect(functions.isStrongPassword('Qay8230yE')).toBe(true);
});

test('isStrongPassword(\'1234abc\') = false', () => {
  expect(functions.isStrongPassword('1234abc')).toBe(false);
});

test('isStrongPassword(\'123\') = false', () => {
  expect(functions.isStrongPassword('123')).toBe(false);
});

// Tests for isDate()
test('isDate(\'20/11/2022\') = true', () => {
  expect(functions.isDate('20/11/2022')).toBe(true);
});

test('isDate(\'01/01/2023\') = true', () => {
  expect(functions.isDate('01/01/2023')).toBe(true);
});

test('isDate(\'123/123\') = false', () => {
  expect(functions.isDate('123/123')).toBe(false);
});

test('isDate(\'77/7777\') = false', () => {
  expect(functions.isDate('77/7777')).toBe(false);
});

// Tests for isHexColor()
test('isHexColor(\'#ffffff\') = true', () => {
  expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('isHexColor(\'#123456\') = true', () => {
  expect(functions.isHexColor('#123456')).toBe(true);
});

test('isHexColor(\'#*abc\') = false', () => {
  expect(functions.isHexColor('#*abc')).toBe(false);
});

test('isHexColor(\'$4566\') = false', () => {
  expect(functions.isHexColor('$4566')).toBe(false);
});