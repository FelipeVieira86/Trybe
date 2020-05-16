// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];
  
function maisRepeticoes(array) {
  let maisRepeticoes = 0;
  let repeticao = 0;
  let numeroQueRepetiu = 0;
  for (i = 0; i < array.length ; i += 1) {
    repeticao = 0;
    for (j = 0;j < array.length; j += 1) {
      if ( array[i] == array[j])
      repeticao += 1
      }
      if (repeticao > maisRepeticoes) {
        maisRepeticoes = repeticao;
        numeroQueRepetiu = array[i]
    }
  }
  return numeroQueRepetiu;
}
console.log(maisRepeticoes(arrayTeste))