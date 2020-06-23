const testes = require('./exercicio9-1');
// 1

describe('exercicios9-1-1', () => {
  // Teste se o retorno de sum(4, 5) é 9
  test('4 + 5 = 9', () => {
    expect(testes.sum(4, 5)).toBe(9);
  });
  // Teste se o retorno de sum(0, 0) é 0
  test('0 + 0 = 0', () => {
    expect(testes.sum(0, 0)).toBe(0);
  });
  // Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
  test("4 + '5' = 'Error'", () => {
    expect(() => {
      testes.sum(4, '5');
    }).toThrow();
  });
  // Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
  test('4 + 5 = 9', () => {
    expect(() => {
      testes.sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});

// 2
describe('exercicio 9-1-2', () => {
  // Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
  test('myIndexOf([1, 2, 3, 4],3) = 2', () => {
    expect(testes.myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });
  // Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
  test('myIndexOf([1, 2, 3, 4],5) = -1', () => {
    expect(testes.myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});

// 3
describe('exercicio9-1-3', () => {
  // Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
  test('mySum([1, 2, 3, 4]) = 10', () => {
    expect(testes.mySum([1, 2, 3, 4])).toBe(10);
  });
  // Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
  test('mySum([1, -2, -3, 4]) = 0', () => {
    expect(testes.mySum([1, -2, -3, 4])).toBe(0);
  });
});

// 4
describe('exercicio9-1-4', () => {
  let arr = [1, 2, 3, 4];
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  test('myRemove([1, 2, 3, 4], 3) = [1, 2, 4]', () => {
    expect(testes.myRemove(arr, 3)).toEqual([1, 2, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('myRemove([1, 2, 3, 4], 3) != [1, 2, 3, 4]', () => {
    expect(testes.myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });
  // Verifique se o array passado por parâmetro não sofreu alterações
  test('arr não sofreu alteração', () => {
    testes.myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  test('myRemove([1, 2, 3, 4], 5) = [1, 2, 3, 4]', () => {
    expect(testes.myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});

// 5
describe('exercicio9-1-5', () => {
  let arr = [1, 2, 3, 4];
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) = [1, 2, 4]', () => {
    expect(testes.myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
  });
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) != [1, 2, 3, 4]', () => {
    expect(testes.myRemoveWithoutCopy(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });
  // Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  test('arr sofreu alteração', () => {
    let arr = [1, 2, 3, 4];
    testes.myRemoveWithoutCopy(arr, 3);
    expect(arr).not.toEqual([1, 2, 3, 4]);
  });
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  test('myRemoveWithoutCopy([1, 2, 3, 4], 5) = [1, 2, 3, 4]', () => {
    arr = [1, 2, 3, 4];
    expect(testes.myRemoveWithoutCopy(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});

// 6
describe('exercicio9-1-6', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  test("myFizzBuzz(15) = 'fizzbuzz'", () => {
    expect(testes.myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  test("myFizzBuzz(9) = 'fizz'", () => {
    expect(testes.myFizzBuzz(9)).toBe('fizz');
  });
  // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  test("myFizzBuzz(10) = 'buzz'", () => {
    expect(testes.myFizzBuzz(10)).toBe('buzz');
  });
  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  test('myFizzBuzz(4) = 4', () => {
    expect(testes.myFizzBuzz(4)).toBe(4);
  });
  // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  test("myFizzBuzz('invalid') = false", () => {
    expect(testes.myFizzBuzz('invalid')).toBe(false);
  });
});

// 7
describe('exercicio9-1-7', () => {
  // Teste se uma variável foi definida
  test('thereIs is defined', () => {
    expect(typeof testes.thereIs).not.toBe('undefined');
  });
});

// 8
describe('exercicio9-1-8', () => {
  // Teste se uma função foi definida
  test('thereAre() is defined', () => {
    expect(typeof testes.thereAre).toBe('function');
  });
});

// 9
describe('exercicio9-1-9', () => {
  // Compare dois objetos (JSON) para verificar se são idênticos ou não
  test('obj1 e obj2 são iguais', () => {
    expect(testes.obj1).toEqual(testes.obj2);
  });
});

// 10
describe('exercicio9-1-10', () => {
  // Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
  test('isAbove(1,2) = false and isAbove(2,1) = true', () => {
    expect(testes.isAbove(1, 2)).toBe(false);
    expect(testes.isAbove(2, 1)).toBe(true);
  });
});
