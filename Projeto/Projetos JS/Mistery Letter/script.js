// variaveis
const inputTexto = document.getElementById('carta-texto');
const botaoTexto = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
// functions

// funcao que define um estilo aleatorio para o span
function defineEstilo() {
  const array = ['newspaper', 'magazine1', 'magazine2'];
  const number = Math.floor(Math.random() * 3); // gera um numero aleatorio entre 0 e 2
  return array[number]; // retorna a posição do array gerada aleatoriamente
}

// funcao quedefine um tamanho aleatorio para o span
function defineTamanho() {
  const array = ['medium', 'big', 'reallybig'];
  const number = Math.floor(Math.random() * 3); // gera um numero aleatorio entre 0 e 2
  return array[number]; // retorna a posição do array gerada aleatoriamente
}

// funcao que define uma rotacao aleatoria para o span
function defineRotacao() {
  const array = ['rotateleft', 'rotateright'];
  const number = Math.floor(Math.random() * 3); // gera um numero aleatorio entre 0 e 2
  if (number < 2) {
    // se o numero for 0 ou 1
    return array[number]; // retorna a posição do array gerada aleatoriamente
  }
  // se o numero for 2
  return false; // retorna false, faz com que possa não receber a classe de rotação
}

// funcao que define uma inclinação aleatoria para o span
function defineInclinacao() {
  const array = ['skewleft', 'skewright'];
  const number = Math.floor(Math.random() * 3); // gera um numero aleatorio entre 0 e 2
  if (number < 2) {
    // se o numero for 0 ou 1
    return array[number]; // retorna a posição do array gerada aleatoriamente
  }
  // se o numero for 2
  return false; // false, faz com que possa não receber a classe de inclinação
}
// funcao que gera as classes do span
function geraClasses(span) {
  span.classList.add(defineEstilo()); // adiciona uma classe de estilo ao span
  span.classList.add(defineTamanho()); // adiciona uma classe de tamanho ao span
  const rotacao = defineRotacao(); // gera a classe de rotação
  if (rotacao) {
    // caso não retorne false
    span.classList.add(rotacao); // adiciona uma classe de rotação ao span
  }
  const inclinacao = defineInclinacao(); // gera a classe de inclinação
  if (inclinacao) {
    // caso não retorne false
    span.classList.add(inclinacao); // adiciona uma classe de rotação ao span
  }
}

// funcao que gera a carta misteriosa
function geraCarta() {
  carta.innerHTML = ''; // limpa a carta
  const array = inputTexto.value.split(' '); // divide a string do input em um array de palavras
  contador.innerText = array.length; // conta a quantidade de palavras no array
  for (let index = 0; index < array.length; index += 1) {
    // executa o for em cada palavra do array
    const span = document.createElement('span'); // cria um span
    carta.appendChild(span); // adiciona o span no paragrafo da carta
    geraClasses(span);
    span.innerText = array[index]; // define o innertext do span com a palavra do array
  }
}

function rerrolaClasses() {
  const target = event.target;
  target.className = '';
  geraClasses(target);
}

function checkEnter(tecla) {
  if (tecla.key === 'Enter') {
    // verifica se a tecla pressionada é o Enter
    geraCarta(); // executa a funcao que gera a carta
  }
}
// listeners
inputTexto.addEventListener('keyup', checkEnter); // listener para gerar a carta usando o Enter
botaoTexto.addEventListener('click', geraCarta); // listener que gera a carta
carta.addEventListener('click', rerrolaClasses); // listener que randomiza as classes do span novamente
