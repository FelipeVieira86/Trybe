// Crie uma função que receba uma string e retorne true se for um palíndromo , 
// ou false, se não for.

function palindromo(palavra) {
  let counter = 0;
  for (i = 0; i < palavra.length -1; i += 1) {
    if (palavra[i] !== palavra[palavra.length - i -1]) {
      counter++;
    }
  }
  if (counter === 0) {
    return true;
    } else {
    return false  }
}
console.log("Arara: " + palindromo("arara"));
console.log("Desenvolvimento: " + palindromo("desenvolvimento"));
console.log("Camarão: " + palindromo("camarão"));
console.log("Abelha: " + palindromo("abelha"));