const assert = require('assert');

// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// 1a - Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9);

// 1b - Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0);

// 1c - Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
assert.throws(() => {
  sum(4, '5');
})
// 1d - Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);

// 2 - A função myIndexOf(arr, item) recebe um array arr,
// um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// 2a - Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
assert.strictEqual(myIndexOf([1, 2, 3, 4], 3), 2);

// 2b - Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
assert.strictEqual(myIndexOf([1, 2, 3, 4], 5), -1);

// 3 - A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// 3a - Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
assert.strictEqual(mySum([1, 2, 3, 4]), 10);

// 3b - Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
assert.strictEqual(mySum([1, -2, -3, 4]), 0);

// 4 - A função myRemove(arr, item) recebe um array arr
// e retorna uma cópia desse array sem o elemento item caso ele exista no array
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 4a - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// 4b - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 4c - Verifique se o array passado por parâmetro não sofreu alterações

// 4d - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// 5 - A função myRemoveWithoutCopy(arr, item) recebe um array arr
// e retorna o próprio array sem o elemento item caso ele exista no array
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 5a - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// 5b - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 5c - Faça uma chamada para a função myRemoveWithoutCopy
// e verifique se o array passado por parâmetro sofreu alterações

// 5d - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// 6 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for
// divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível
// apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso
// num não seja um número
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 6a - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// 6b - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(6), 'fizz');

// 6c - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(10), 'buzz');

// 6d - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique
// se o retorno é o esperado
assert.strictEqual(myFizzBuzz(4), 4);

// 6e - Faça uma chamada com um parâmetro que não é um número e verifique se o
// retorno é o esperado
assert.strictEqual(myFizzBuzz('4'), false);

// 7 - Teste se uma variável foi definida
const thereIs = '';
assert.notStrictEqual(typeof thereIs, 'undefined');

// 8 - Teste se uma função foi definida
function thereAre() {}
assert.strictEqual(typeof thereAre, 'function');

// 9 - Utilize assert.ok() para testar uma condição
function change(param) {
  return !param;
}
assert.ok(change(true) === false);

// 10 - Compare dois objetos (JSON) para verificar se são idênticos ou não
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);

// 11 - Faça o teste de uma função que compara dois números e retorna true se o primeiro
// for maior que o segundo e false caso contrário.
function isAbove(num1, num2) {
  return num1 > num2;
}

assert.strictEqual(isAbove(5, 4), true);

// BONUS

// Imagine que você vai construir uma máquina de venda automática (como essas que vendem
// refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago /// e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve
// implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas
// que ela devolverá para a pessoa.

// Requisitos
// Como uma pessoa que compra em máquinas automáticas, eu gostaria de selecionar um item,
// depositar o pagamento e receber o item e o troco.

// Critérios de aceite
// Uma chamada bem-sucedida de uma função getChange deve retornar uma lista com o valor das
// moedas que serão devolvidas à pessoa
// Essa lista deve estar no formato decrescente de valor
// É permitida a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
// Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que
// o valor da compra
// Moedas disponíveis
// As moedas serão representadas pelos valores 200, 100, 50, 20, 10, 5, 2 e 1. Abaixo, existe uma
// lista de correspondência com os valores em reais (R$)

// 200 (R$2)
// 100 (R$1)
// 50 (R$0,50)
// 20 (R$0,20)
// 10 (R$0,10)
// 5 (R$0,05)
// 2 (R$0,02)
// 1 (R$0,01)
// A quantidade de cada moeda é infinita, imagine que isso é uma simplificação do problema.
// Exemplo
// Se uma pessoa comprar itens com valor total igual a R$2,15 (ou seja, 215) e pagar R$3 (ou
// seja, 300), o valor do troco é R$0,85 (ou seja, 85). Para entregar esse troco à pessoa,
// deve-se retornar as moedas 1x R$0,50, 1x R$0,20, 1x R$0,10 e 1x R$0,05, formando assim a lista
// [50, 20, 10, 5].

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  if (remaining < 0) throw new Error('paid value is not enough');
  
  while (remaining > 0) {
    for (i = 0; i < coins.length; i += 1) {
      if (coins[i] <= remaining) {
        remaining -= coins[i];
        change.push(coins[i]);
        break;
      }
    }
  }

  return change;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => {
  getChange(100, 10);
}, /^Error: paid value is not enough$/);
