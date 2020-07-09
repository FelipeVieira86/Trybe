// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const data = require('./tresfuncoes');
jest.mock('./tresfuncoes');

describe('Exercicio10-2-4 - Mock lowerCase', () => {
  test('Oi = oi', () => {
    data.upperCase
    .mockImplementation(string => string.toLowerCase());
    expect(data.upperCase('Oi')).toBe('oi');
  });
  test('Função foi chamada', () => {
    expect(data.upperCase).toHaveBeenCalled();
  });
  test('Função foi chamada uma vez', () => {
    expect(data.upperCase).toHaveBeenCalledTimes(1);
  });
});

describe('Exercicio10-2-4 - Mock lastLetter', () => {
  test('Trombadinha = a', () => {
    data.firstLetter
    .mockImplementation(string => string[string.length - 1]);
  expect(data.firstLetter('Trombadinha')).toBe('a')  
  })
  test('Função foi chamada', () => {
    expect(data.firstLetter).toHaveBeenCalled();
  });
  test('Função foi chamada uma vez', () => {
    expect(data.firstLetter).toHaveBeenCalledTimes(1);
  });
});

describe('Exercicio10-2-4 - Mock threeStrings', () => {
  test('(oi,td,bem) = oi td bem', () => {
    data.twoStrings.mockImplementation((a,b,c) => `${a} ${b} ${c}`)
    expect(data.twoStrings('oi','td','bem')).toBe('oi td bem')
  })
  test('Função foi chamada', () => {
    expect(data.twoStrings).toHaveBeenCalled();
  });
  test('Função foi chamada uma vez', () => {
    expect(data.twoStrings).toHaveBeenCalledTimes(1);
  });
})
