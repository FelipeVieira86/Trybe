//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.
arrayTeste = [2, 3, 6, 7, 10, 1];
function maiorIndiceNoArray(array) {
  let indice = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] < array[i+1]) {
      indice = i + 1;
    }
  }
  return indice
}

console.log(maiorIndiceNoArray(arrayTeste));