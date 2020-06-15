const assert = require('assert');
// 1 - escreva a função addOne para passar nos testes abaixo:
const addOne = (array) => {
  const array2 = [];
  for (i = 0; i < array.length; i += 1) {
    array2.push(array[i] + 1);
  }
  return array2;
};
//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
