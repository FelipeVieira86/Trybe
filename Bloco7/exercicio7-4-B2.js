const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:
const removeMiddle = array => {
  const i = Math.floor(array.length/2);
  const removed = array.splice(i,1)
  return removed
}
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);
assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
