// Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const data = require('./rolld100');

describe('Exercicio10-2-1', () => {
  test('Recebe o valor de 10', () => {
    data.rolld100 = jest
    .fn(data.rolld100)
    .mockReturnValue(10);
    expect(data.rolld100()).toBe(10);
  });
  test('Função foi chamada', () => {
    expect(data.rolld100).toHaveBeenCalled();
  });
  test('Função foi chamada 2 vezes', () => {
    expect(data.rolld100).toHaveBeenCalledTimes(1);
  });
});
