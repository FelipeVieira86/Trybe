// variaveis
const textoCor = document.getElementById('rgb-color');
const cor1 = document.getElementById('box1');
const cor2 = document.getElementById('box2');
const cor3 = document.getElementById('box3');
const cor4 = document.getElementById('box4');
const cor5 = document.getElementById('box5');
const cor6 = document.getElementById('box6');
const balls = document.getElementById('ball-box').children;
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');
let corEscolhida = '';
let target = '';
// functions

// funcao que gera um numero random
function getRandomInt(min, max) {
  // funcao recebe 2 valores (minimo e maximo) para randomizar as cores
  min = Math.ceil(min); // arredonda o numero menor para cima
  max = Math.floor(max); // arredonda o numero maior para baixo
  return Math.floor(Math.random() * (max - min)) + min;
  // formula que retorna um valor aleatorio entre o menor e maior numero fornecido
  // poderia ter usado * 255 ja que as cores ficam entre 0 e 255
  // mas dessa maneira posso trocar os valores na proxima funcao caso queira
  // para cores mais escuras colocaria um valor maximo mais baixo
  // para cores claras colocaria um valor minimo mais alto
}

// funcao que recebe os valores da função anterior para gerar as cores
function getRandomColor() {
  const r = getRandomInt(0, 255); // define um valor entre 0 e 255
  const g = getRandomInt(0, 255); // define um valor entre 0 e 255
  const b = getRandomInt(0, 255); // define um valor entre 0 e 255
  const color = `(${r},${g},${b})`; // adiciona os valores definidos em um string
  return color; // retorna a cor randomizada
}

// função que define as 3 cores aleatorias quando a pagina é carregada
function setRandomColors() {
  let guessColor = getRandomColor();
  const setCor1 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor1.style.backgroundColor = setCor1; // seta o style com o valor da variavel
  guessColor = getRandomColor();
  const setCor2 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor2.style.backgroundColor = setCor2; // seta o style com o valor da variavel
  guessColor = getRandomColor();
  const setCor3 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor3.style.backgroundColor = setCor3; // seta o style com o valor da variavel
  guessColor = getRandomColor();
  const setCor4 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor4.style.backgroundColor = setCor4; // seta o style com o valor da variavel
  guessColor = getRandomColor();
  const setCor5 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor5.style.backgroundColor = setCor5; // seta o style com o valor da variavel
  guessColor = getRandomColor();
  const setCor6 = `rgb${guessColor}`; // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor6.style.backgroundColor = setCor6; // seta o style com o valor da variavel
}

function pickColor() {
  const colorNumber = Math.floor(Math.random() * 6);
  // formula que retorna um valor aleatorio entre 0 e 5
  const guessColor = balls[colorNumber].style.backgroundColor; // define qual sera a cor da vez
  // com o valor definido em colorNumber, pega a posição no array dos filhos
  // da div que contem as cores e salva a cor do background
  textoCor.innerHTML = guessColor; // denide o texto com a cor escolhida para aparecer na tela
  corEscolhida = guessColor; // define a variavel que ira verificar a cor correta
}

function resetGame() {
  setRandomColors();
  pickColor();
}

function checkColor() {
  target = event.target; // seta o target
  if (target.style.backgroundColor === corEscolhida) {
    answer.innerText = 'Acertou!';
    score.innerText = parseInt(score.innerText, 10) + 3;
    resetGame();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    score.innerText = parseInt(score.innerText, 10) - 1;
  }
}

// event listeners
cor1.addEventListener('click', checkColor); // listener que verifica se a cor clickada é a correta
cor2.addEventListener('click', checkColor); // listener que verifica se a cor clickada é a correta
cor3.addEventListener('click', checkColor); // listener que verifica se a cor clickada é a correta
cor4.addEventListener('click', checkColor); // listener que verifica se a cor clickada é a correta
cor5.addEventListener('click', checkColor); // listener que verifica se a cor clickada é a correta
cor6.addEventListener('click', checkColor); // listener que verifica se a cor clickada é a correta
reset.addEventListener('click', resetGame);
setRandomColors(); // chama função que define as 6 cores iniciais
pickColor(); // chama função que escolhe uma das cores para ser a cor da vez
