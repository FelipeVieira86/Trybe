// variaveis
const ol = document.getElementById('lista-tarefas');
const addTask = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const limpaTudo = document.getElementById('apaga-tudo');
const limpaSel = document.getElementById('remover-selecionado');
const limpaFin = document.getElementById('remover-finalizados');
const salvaLista = document.getElementById('salvar-tarefas');
const moveBaixo = document.getElementById('mover-baixo');
const moveCima = document.getElementById('mover-cima');
const linhas = document.getElementById('linhas');
let altura = 0;
let target = '';
let selected = '';

// funcoes
function refazLinha() {
  // função relacionada ao CSS, só serve pra fazer a linha vermelha do caderninho
  // quando muda a quantidade de tarefas na lista
  altura = 0; // reseta a variavel altura para 0
  for (let i = 0; i < ol.children.length; i += 1) {
    // pra cada elemento dentro do ol adiciona 46 ao valor de altura
    altura += 46;
  }
  const novaAltura = `height: ${altura}px !important`; // seta a string q sera adicionada ao style
  linhas.style = novaAltura; // adiciona o valor ao style
}

function adicionarTarefa() {
  // adiciona nova tarefa na lista
  if (taskText.value.length !== 0) {
    // verifica se o input está vazio
    const li = document.createElement('li'); // cria o elemento li
    ol.appendChild(li); // adiciona o elemento criado como filho do ol
    li.innerText = taskText.value; // adiciona o texto do input ao il
    li.className = 'task'; // adiciona a classe task ao il (somente para poder modificar no CSS)
    taskText.value = ''; // apaga o texto do input
    refazLinha();
  }
}

function adicionarTarefaEnter(tecla) {
  // funcao que serve somente para aceitar o Enter como forma de adicionar tarefa na lista
  if (tecla.key === 'Enter') {
    // verifica se a tecla pressionada é o Enter
    adicionarTarefa(); // executa a funcao de adicionar tarefas na lista
  }
}

function apagaFIn() {
  // funcao que apaga as tarefas completas
  const completos = document.getElementsByClassName('completed'); // puxa o array de todos os elementos que contenham a classe completed
  for (let index = completos.length - 1; index >= 0; index -= 1) {
    // verificação feita de tras pra frente pra evitar mudança de posição
    // dos elementos no array ao deletar um elemento
    completos[index].remove(); // remove o elemento do array na posição do index
  }
  refazLinha();
}

// funcao que limpa a lista de tarefas
function apagaTodos() {
  ol.innerText = ''; // zera as informações dentro de ol
  refazLinha();
}

// funcao que apaga somente a tarefa selecionada
function apagaSel() {
  const selecionado = document.getElementsByClassName('selected'); // seto variavel com o array de elementos com a classe selected
  selecionado[0].remove(); // remove o elemento na posição 1 do array
  // (na teoria era pra ter sempre somente 1 selecionado, mas nunca se sabe =p)
  refazLinha();
}

// funcao que carrega as infos do local storage
function recuperaLocal() {
  const savedList = localStorage.getItem('saved tasks'); // seta variavel com as informações
  // salvas na key saved tasks
  ol.innerHTML = savedList; // adiciona ao innerHTML do ol as informações que estavam
  // na key saved tasks
}

// função de risca a terefa
function riscaTarefa() {
  target = event.target; // seta o target
  if (target.classList.contains('completed')) {
    // se o target já tem a classe completed
    target.classList.remove('completed'); // remove a classe completed
  } else {
    // se o target não tem a classe completed
    target.classList.add('completed'); // adiciona a classe completed
  }
}

// funcao que salva as tasks no local storage
function saveList() {
  localStorage.clear(); // limpa o local storage
  localStorage.setItem('saved tasks', ol.innerHTML); // adiciona o innerHTML do ol na key saved tasks
}

// funcao que faz o elemento posicionado descer uma posição na lista
function trocaBaixo() {
  if (selected.classList !== undefined) {
    const quemTroca = document.getElementsByClassName('selected')[0];
    if (quemTroca.nextElementSibling !== null) {
      const aux = quemTroca.nextElementSibling.innerText;
      quemTroca.nextElementSibling.innerText = quemTroca.innerText;
      quemTroca.innerText = aux;
      quemTroca.classList.remove('selected');
      quemTroca.nextElementSibling.classList.add('selected');
      selected = document.getElementsByClassName('selected')[0];
    }
  }
}

// faz a mesma coisa da função anterior, mas troca com a task de cima
function trocaCima() {
  if (selected.classList !== undefined) {
    // verifica se tem algum elemento selecionado para troca
    const quemTroca = document.getElementsByClassName('selected')[0];
    if (quemTroca.previousElementSibling !== null) {
      const aux = quemTroca.previousElementSibling.innerText;
      quemTroca.previousElementSibling.innerText = quemTroca.innerText;
      quemTroca.innerText = aux;
      quemTroca.classList.remove('selected');
      quemTroca.previousElementSibling.classList.add('selected');
      selected = document.getElementsByClassName('selected')[0];
    }
  }
}
// funcao que troca o elemento selecionado
function trocaSelecao() {
  target = event.target;
  if (selected.classList !== undefined) {
    selected.classList.remove('selected');
  }
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

// eventListeners
taskText.addEventListener('keyup', adicionarTarefaEnter); // listener para adicionar tarefas usando o Enter
addTask.addEventListener('click', adicionarTarefa); // listener para adicionar tarefas com o click no botão
ol.addEventListener('click', trocaSelecao); // listener para trocar elemento selecionado
ol.addEventListener('dblclick', riscaTarefa); // listener de duplo clique para riscar tarefa
limpaTudo.addEventListener('click', apagaTodos); // listener para limpar a lista inteira
limpaFin.addEventListener('click', apagaFIn); // listener para apagar tarefas completas
salvaLista.addEventListener('click', saveList); // listener para salvar tasks no localstorage
limpaSel.addEventListener('click', apagaSel); // listener para apagar elemento selecionado
moveBaixo.addEventListener('click', trocaBaixo); // listener para trocar posição para baixo
moveCima.addEventListener('click', trocaCima); // listener para trocar posição para cima
recuperaLocal(); // chama função para recuperar as tasks salvas
refazLinha(); // chama função relacionada ao CSS sem efeito direto no projeto
