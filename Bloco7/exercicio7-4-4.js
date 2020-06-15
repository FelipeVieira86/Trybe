const assert = require('assert');
// 4 - escreva a função findTheNeedle para passar nos testes abaixo:
const findTheNeedle = (array, word) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) return i
  }
  return -1
}
//
let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
