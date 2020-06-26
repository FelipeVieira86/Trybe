const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const container = document.getElementById('jokeContainer');

function sumArray() { 
  return new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = arr.map(number => (number = Math.floor(Math.random() * 50) ** 2));
  const chance = arr2.reduce((a, b) => a + b);
  if (chance < 8000) resolve(chance);
  else reject('É mais de oito mil! Essa promise deve estar quebrada!');
});
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => (container.innerHTML = data.joke));
};

function success(sum) {
  return new Promise((resolve, reject) => {
    const arr = [2, 3, 5, 10];
    const total = arr.map(number => sum / number);
    if (total) resolve(total);
    reject('Error on Success')
  })
  
};

function sumTotal(total) { 
  return new Promise((resolve, reject) => {
    lastSum = total.reduce((a, b) => a + b)
    if (lastSum) resolve(console.log(lastSum)) 
    else reject('Error on sumTotal')
  });
}

async function asyncBonusFunc() {
  try {
  const sumArrayResult = await sumArray()
  const successResult =  await success(sumArrayResult)
  await sumTotal(successResult)
  } catch(error) {
    console.log(error)
  }
}

window.onload = () => fetchJoke();
window.onload = () => asyncBonusFunc();