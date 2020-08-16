const paletteColor = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clear = document.getElementById('clear-board');
const gridSize = document.getElementById('generate-board');
const gridSizeInput = document.getElementById('board-size');
const colorVariety = document.getElementById('color-variety');
const colorVarietyButton = document.getElementById('color-variety-button');

// -------------------------SETUP INICIAL------------------------------- //

// Cria Grid
function setGrid(n) {
  pixelBoard.innerHTML = '';
  pixelBoard.style.width = `${42 * n}px`;
  for (let index = 0; index < n * n; index += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.classList.add('pixel');
  }
}
setGrid(5);
// Random Number
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Random Color
function randomColor() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  const color = `rgb(${r},${g},${b})`;
  return color;
}

// Set Color

function setColor(m) {
  paletteColor.innerHTML = '';
  paletteColor.style.width = `${m * 42}px`;
  const preto = document.createElement('div');
  paletteColor.appendChild(preto);
  preto.className = 'color selected';
  preto.style.backgroundColor = 'black';
  for (let param = 0; param < m - 1; param += 1) {
    const cor = document.createElement('div');
    paletteColor.appendChild(cor);
    cor.classList.add('color');
    cor.style.backgroundColor = randomColor();
  }
}

function setColorNumbers() {
  const n = colorVariety.value;
  setColor(n);
}
setColor(4);
// ---------------------------------------------------------------------- //

// Colore Pixel
pixelBoard.addEventListener('click', function () {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = window
    .getComputedStyle(selectedColor)
    .getPropertyValue('background-color');
});

// Select Color
paletteColor.addEventListener('click', function () {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
});

// Clear Board
clear.addEventListener('click', function () {
  for (let pixel = 0; pixel < pixelBoard.childElementCount; pixel += 1) {
    pixelBoard.children[pixel].style.backgroundColor = 'white';
  }
});

// Change Grid Size
function changeGridSize() {
  let n = gridSizeInput.value;
  if (n === '') {
    alert('Board inválido!');
  }
  if (n <= 5) {
    n = 5;
  }
  if (n >= 50) {
    n = 50;
  }
  setGrid(n);
}
gridSize.addEventListener('click', changeGridSize);
colorVarietyButton.addEventListener('click', setColorNumbers);
