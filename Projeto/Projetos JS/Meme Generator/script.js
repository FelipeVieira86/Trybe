// definição de variaveis
const memeImage = document.getElementById('meme-image');
const textInput = document.getElementById('text-input');
const textInput2 = document.getElementById('text-input2');
const imgContainer = document.getElementById('meme-image-container');
const caixaTxtDoMeme = document.getElementById('meme-text');
const caixaTxtDoMeme2 = document.getElementById('meme-text2');
const imgInput = document.getElementById('meme-insert');
const fogo = document.getElementById('fire');
const agua = document.getElementById('water');
const terra = document.getElementById('earth');
const badluck = document.getElementById('meme-4');
const yellowsuit = document.getElementById('meme-3');
const work = document.getElementById('meme-2');
const spider = document.getElementById('meme-1');

// Functions

// função para adicionar texto na imagem,
// como coloquei 2 text inputs diferentes ele verifica qual está sendo usado
function criaTxtDoMeme() {
  if (event.target === textInput) {
    // target é o textinput 1
    caixaTxtDoMeme.innerText = textInput.value; // adiciona no meme o valor do input1
  }
  if (event.target === textInput2) {
    // target é o textinput 2
    caixaTxtDoMeme2.innerText = textInput2.value; // adiciona no meme o valor do input2
  }
}
// funcao que troca a borda do meme, não sei se foi a forma mais efetiva
// de montar com todas as bordas dentro da mesma funcao...
function trocaBorda() {
  if (event.target === fogo) {
    // se o botao clicado foi o fogo
    imgContainer.style.borderColor = 'red'; // adiciona o style bordercolor red ao container da imagem
    imgContainer.style.borderWidth = '3px'; // adiciona o style borderwidth 3px ao container da imagem
    imgContainer.style.borderStyle = 'dashed'; // adiciona o style borderstyle dashed ao container da imagem
  }
  if (event.target === agua) {
    // se o botao clicado foi o agua
    imgContainer.style.borderColor = 'blue'; // adiciona o style bordercolor blue ao container da imagem
    imgContainer.style.borderWidth = '5px'; // adiciona o style borderwidth 5px ao container da imagem
    imgContainer.style.borderStyle = 'double'; // adiciona o style borderstyle double ao container da imagem
  }
  if (event.target === terra) {
    // se o botao clicado foi o terra
    imgContainer.style.borderColor = 'green'; // adiciona o style bordercolor green ao container da imagem
    imgContainer.style.borderWidth = '6px'; // adiciona o style borderwidth 6px ao container da imagem
    imgContainer.style.borderStyle = 'groove'; // adiciona o style borderstyle groove ao container da imagem
  }
}
// funcao para trocar imagem do meme4
function changePicBadLuck() {
  memeImage.src = 'imgs/meme4.png'; // troca a imagem dentro do container para imagem clicada
  caixaTxtDoMeme.style.left = '40px'; //-------------------------------------------------------------------------------
  caixaTxtDoMeme.style.top = '80px'; //
  caixaTxtDoMeme.style.width = '340px'; //
  caixaTxtDoMeme2.style.visibility = 'visible'; // arruma posição dos text box de acordo com a imagem selecionada
  caixaTxtDoMeme2.style.left = '40px'; //
  caixaTxtDoMeme2.style.top = '420px'; //
  caixaTxtDoMeme2.style.width = '340px'; //----------------------------------------------------------------------------
}
// funcao para trocar imagem do meme3
function changePicYellowSuit() {
  memeImage.src = 'imgs/meme3.png'; // troca a imagem dentro do container para imagem clicada
  caixaTxtDoMeme.style.left = '40px'; //-------------------------------------------------------------------------------
  caixaTxtDoMeme.style.top = '80px'; //
  caixaTxtDoMeme.style.width = '340px'; //
  caixaTxtDoMeme2.style.visibility = 'visible'; // arruma posição dos text box de acordo com a imagem selecionada
  caixaTxtDoMeme2.style.left = '40px'; //
  caixaTxtDoMeme2.style.top = '400px'; //
  caixaTxtDoMeme2.style.width = '340px'; //-------------------------------------------------------------------------------
}

// funcao para trocar imagem do meme2
function changePicWork() {
  memeImage.src = 'imgs/meme2.png'; // troca a imagem dentro do container para imagem clicada
  caixaTxtDoMeme.style.left = '40px'; //-------------------------------------------------------------------------------
  caixaTxtDoMeme.style.top = '80px'; //
  caixaTxtDoMeme.style.width = '340px'; // arruma posição dos text box de acordo com a imagem selecionada
  caixaTxtDoMeme2.style.visibility = 'hidden'; //-------------------------------------------------------------------------------
}

// funcao para trocar imagem do meme1
function changePicSpider() {
  memeImage.src = 'imgs/meme1.png'; // troca a imagem dentro do container para imagem clicada
  caixaTxtDoMeme.style.left = '10px'; //-------------------------------------------------------------------------------
  caixaTxtDoMeme.style.top = '200px'; //
  caixaTxtDoMeme.style.width = '200px'; //
  caixaTxtDoMeme2.style.visibility = 'visible'; // arruma posição dos text box de acordo com a imagem selecionada
  caixaTxtDoMeme2.style.left = '200px'; //
  caixaTxtDoMeme2.style.top = '300px'; //
  caixaTxtDoMeme2.style.width = '200px'; //-------------------------------------------------------------------------------
}
// funcao que verifica qual das 4 imagens predefinidas foi clicada e puxa a funcao correta
function changePic() {
  if (event.target === badluck) {
    // verifica qual imagem foi clicada, se for o meme4...
    changePicBadLuck();
  }
  if (event.target === yellowsuit) {
    // verifica qual imagem foi clicada, se for o meme3...
    changePicYellowSuit();
  }
  if (event.target === work) {
    // verifica qual imagem foi clicada, se for o meme2...
    changePicWork();
  }
  if (event.target === spider) {
    // verifica qual imagem foi clicada, se for o meme1...
    changePicSpider();
  }
}
// eventListeners
textInput.addEventListener('keyup', criaTxtDoMeme); // listenr do input1 que adiciona texto no meme
textInput2.addEventListener('keyup', criaTxtDoMeme); // listener do input2 que adiciona texto no meme

imgInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});
fogo.addEventListener('click', trocaBorda); // listener do botao fogo para trocar borda
agua.addEventListener('click', trocaBorda); // listener do boao agua para trocar borda
terra.addEventListener('click', trocaBorda); // listener do botao terra para trocar borda
badluck.addEventListener('click', changePic); // listener da imagem meme4 para trocar imagem
work.addEventListener('click', changePic); // listener da imagem meme2 para trocar imagem
yellowsuit.addEventListener('click', changePic); // listener da imagem meme3 para trocar imagem
spider.addEventListener('click', changePic); // listener da imagem meme1 para trocar imagem
