// Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       }
//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(animal => animal.name === name);
      if (animal) {
        return resolve(animal);
      } else return reject('Nenhum animal com esse nome!');
    }, 1000);
  });
};

const getAnimal = name => findAnimalByName(name).then(animal => animal);

module.exports = {
  getAnimal,
  findAnimalByName,
  Animals,
};
