// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const data = require('./rolld100');

describe('Exercicio10-2-3 - Mock Multiplicação', () => {
  test('2 * 3 * 4 = 24', () => {
    data.rolld100 = jest
    .fn()
    .mockImplementation((a, b, c) => a * b * c)
    expect(data.rolld100(2, 3, 4)).toBe(24);
  });
  test('Função foi chamada', () => {
    expect(data.rolld100).toHaveBeenCalled();
  });
  test('Função foi chamada uma vez', () => {
    expect(data.rolld100).toHaveBeenCalledTimes(1);
  });
});

describe('Exericio10-2-3 - Mock Dobro', () => {
  test('2 = 4', () => {
    data.rolld100 = jest
    .fn()
    .mockImplementation(a => a * 2);
    expect(data.rolld100(2)).toBe(4);
  })
  test('Função foi chamada', () => {
    expect(data.rolld100).toHaveBeenCalled();
  });
  test('Função foi chamada uma vez', () => {
    expect(data.rolld100).toHaveBeenCalledTimes(1);
  });
})
