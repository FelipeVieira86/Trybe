// Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const btn = document.getElementById('clickbtn');
const htmlCounter = document.getElementById('clickcounter');
let counter = 0;

const addCounter = () => {
  counter += 1;
  htmlCounter.innerText = counter;
};

btn.addEventListener('click', addCounter);
