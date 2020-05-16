// Crie uma função que receba um array de nomes e retorne o nome com a maior 
//quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

arrayTeste = ['José', 'Fernanda', 'Lucas', 'Nádia', 'Cairo', 'Joana'];

function maiorNome(array) {
  let indice = 0;
  let maiorPalavra = "";
  for (i = 0; i < array.length; i += 1) {
    for (j = 0; j < array.length; j += 1) {
      let arrayI = "" + array[i];
      let arrayI1 = "" + array[j];
      if (arrayI.length > arrayI1.length && arrayI.length > maiorPalavra.length) {
        indice = i;
        maiorPalavra = arrayI;
      }
    }
  }
  return array[indice];  
}
console.log (maiorNome(arrayTeste));