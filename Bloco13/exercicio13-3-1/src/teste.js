const array = [1, 2, 3, 4, 5, 6, 7]
const a = array.slice(0,3)
const b = array.slice(4)

const novoArray = [...a, 10, ...b]

console.log('a', a)
console.log('b', b)
console.log(novoArray)