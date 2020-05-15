// Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be");
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan");
// Retorno esperado: false

function stringCheck(word , ending) {
  for (y = 1; y <= ending.length; y++) {
    if (word[word.length-y] !== ending[ending.length-y]) {
      return false;
    }
  }
  return true; 
}

console.log(stringCheck("trybe" , "ybe"));
console.log(stringCheck("trybe", "be"));
console.log(stringCheck("trybe", "sbe"));
console.log(stringCheck("joaofernando", "fernan"));
