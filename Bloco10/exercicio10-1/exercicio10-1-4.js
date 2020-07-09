const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
console.log(getRepos('https://api.github.com/users/tryber/repos'))
module.exports = getRepos;