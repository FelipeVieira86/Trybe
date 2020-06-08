// Crie um código JavaScript com a seguinte especificação:

// Função 1: Escreva uma função que vai receber uma string como parâmetro.
// Sua função deverá procurar pela letra x em uma string qualquer que você determinar
// e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// String determinada: “Tryber x aqui!”
// Parâmetro: “Bebeto”
// Retorno: “Tryber Bebeto aqui!”
const trocaOX = (param) => {
  const str = 'Tryber x aqui com uma xícara!';
  const newStr = str.replace('x', param);
  return newStr;
};

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
// Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro.
// Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

let arrayGlobal = ['Html', 'JS', 'CSS', 'Github', 'Expulsão Sumária!'];
const retornaSkills = (param) => {
  arrayGlobal = arrayGlobal.sort();
  return `${trocaOX(param)}
  
  Minhas Habilidades são:
  
    ${arrayGlobal[0]}
    ${arrayGlobal[1]}
    ${arrayGlobal[2]}
    ${arrayGlobal[3]}
    ${arrayGlobal[4]}
    
  #GoTrybe!!`;
};

console.log(retornaSkills('Xablau'));
