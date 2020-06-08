// Crie uma função que receba um número e retorne seu fatorial.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.

const fatorial = n => n <= 1? 1 : n * fatorial(n-1);


console.log(fatorial(5));
