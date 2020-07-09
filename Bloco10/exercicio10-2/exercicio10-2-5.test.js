// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const data = require('./tresfuncoes');
jest.mock('./tresfuncoes');

describe('Exercicio10-2-5 - Mock lowerCase', () => {
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
})

describe('Exercicio10-2-5 - Mock Clear', () => {
  test('Oi = OI', () => {
    data.upperCase.mockReset()
    expect(data.upperCase('Oi')).toBe(undefined)
  })
})