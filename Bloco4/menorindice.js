// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

arrayTeste = [2, 4, 6, 7, 10, 0, -3];
function menorIndiceNoArray(array) {
  let indice = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] > array[i+1]) {
      indice = i + 1;
    }
  }
  return indice
}

console.log(menorIndiceNoArray(arrayTeste));