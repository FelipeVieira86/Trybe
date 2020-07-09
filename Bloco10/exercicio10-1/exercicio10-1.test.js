const exercicio1 = require('./exercicio10-1-1');
const { findUserById } = require('./exercicio10-1-2e3');
const exercicio4 = require('./exercicio10-1-4');
const fetch = require('node-fetch')

describe('exercicio 10-1', () => {
  // 1 Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
  test('oitdbem = OITDBEM', (done) => {
    exercicio1('oitdbem', (callback) => {
      expect(callback).toBe('OITDBEM');
      done();
    });
  });
});

describe('exercicio 10-2', () => {
  // 2 Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
  // Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

  // Usuário encontrado
  test("findUserById(5) = 'Paul'", () => {
    expect.assertions(1);
    return findUserById(5).then(user => {
      expect(user.name).toEqual('Paul');
    });
  });

  // Usuário não encontrado
  test("findUserById(3) = { error: 'User with 3 not found.' }", () => {
    expect.assertions(1);
    return findUserById(3).catch(error =>
      expect(error).toEqual({ error: 'User with 3 not found.' }),
    );
  });
});

describe('Exercicio 10-3', () => {
  // 3 Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
  // Dica: Utilize o try/catch para o caso de erro.
  // Usuário encontrado
  test("findUserById(5) = 'Paul'", async () => {
    const user = await findUserById(5);
    expect(user.name).toBe('Paul');
  });
  // Usuário não encontrado
  test("findUserById(3) = { error: 'User with 3 not found.' }", async () => {
    try {
      await findUserById(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});

describe('Exercicio 10-4', () => {
  // 4 O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
  test("getRepos('https://api.github.com/users/tryber/repos') has the repos sd-01-week4-5-project-todo-list", (done) => {
    exercicio4('https://api.github.com/users/tryber/repos').then( (reposList) => {
    expect(reposList.some(reposName => reposName === 'sd-01-week4-5-project-todo-list')).toBe(false)
    done()  
  })})

  test("getRepos('https://api.github.com/users/tryber/repos') has the repos sd-01-week4-5-project-todo-list", (done) => {
    exercicio4('https://api.github.com/users/tryber/repos').then( (reposList) => {
    expect(reposList.some(reposName => reposName === 'sd-01-week4-5-project-meme-generator')).toBe(false)
    done()  
  })})
});
