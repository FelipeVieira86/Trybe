// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let n = 5;

function somatório(numero) {
  let soma = 0;
  for (i = numero; i > 0; i -= 1) {
    soma += i;
  }
  return soma;
}
console.log(somatório(n));