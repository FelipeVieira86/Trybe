// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2.
// Essa função deve possuir três parâmetros, sendo eles:
// o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionaTurnoManha = (param) => {
  param.turno = 'manhã';
  return param;
};

adicionaTurnoManha(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (param) => Object.keys(param);

// console.log(listKeys(lesson3));

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const objLength = (param) => Object.keys(param).length;

// console.log(objLength(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (param) => Object.values(param);

// console.log(listValues(lesson3));

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
// Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
let allLessons;
const createAllLessons = () => {
  const lessons = { lesson1, lesson2, lesson3 };
  allLessons = Object.assign({}, lessons);
};
createAllLessons();
// console.log(allLessons)

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudents = () => {
  let total = 0;
  const key = Object.keys(allLessons);
  for (i in key) {
    total += allLessons[key[i]].numeroEstudantes;
  }
  return total;
};

// console.log(allStudents());

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
//  console.log(getValueByNumber(lesson1, 0));
//  Output: 'Matématica'

const getValueByNumber = (obj, position) => Object.values(obj)[position];
// console.log(getValueByNumber(lesson1, 0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (obj, key, value) => {
  const pairs = Object.entries(obj);
  for (i in pairs) {
    if (pairs[i][0] == key && pairs[i][1] == value) {
      return true;
    }
  }
  return false;
};
// console.log(verifyPair(lesson3, 'turno', 'noite')); //true
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // false

// Bonus
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const totalMathStudents = () => {
  let total = 0;
  const key = Object.keys(allLessons);
  for (i in key) {
    if (allLessons[key[i]].materia == 'Matemática') {
      total += allLessons[key[i]].numeroEstudantes;
    }
  }
  return total;
};
// console.log(totalMathStudents());

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora,
// as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (obj, nome) => {
  const report = {
    professor: nome,
    aulas: [],
    estudantes: 0,
  };
  const key = Object.keys(obj);
  for (i in key) {
    if (obj[key[i]].professor == nome) {
      report.aulas.push(obj[key[i]].materia);
      report.estudantes += obj[key[i]].numeroEstudantes;
    }
  }
  return report;
};

console.log(createReport(allLessons, 'Maria Clara'));
