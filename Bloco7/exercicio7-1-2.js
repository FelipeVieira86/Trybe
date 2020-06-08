// Crie uma função que receba uma frase e retorne qual a maior palavra
// Exemplo: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (str) => {
  const strArray = str.split(' ');
  let maior = strArray[0];
  for (let i = 1; i < strArray.length; i += 1) {
    if (strArray[i].length > maior.length) {
      maior = strArray[i];
    }
  }
  return maior;
};

console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);
