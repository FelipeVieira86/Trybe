const assert = require('assert');
// 2 - escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (array) => {
  const array2 = []
  for (i = 0; i < array.length; i += 1) {
    array2.push(array[i].length)
  }
  return array2
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
