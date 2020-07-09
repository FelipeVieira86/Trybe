// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const data = require('./rolld100');

describe('Exercicio10-2-2', () => {
  test('10 / 5 = 2', () => {
    data.rolld100 = jest
    .fn()
    .mockImplementationOnce((a, b) => a / b);
    expect(data.rolld100(10, 5)).toBe(2);
  });
  test('Função foi chamada', () => {
    expect(data.rolld100).toHaveBeenCalled();
  });
  test('Função foi chamada somente uma vez', () => {
    expect(data.rolld100).toHaveBeenCalledTimes(1);
  });
});
