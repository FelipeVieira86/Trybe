//você deve somar todos os valores contidos no array e imprimir o resultado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
for (i = 0; i < numbers.length; i+=1) {
  total += numbers[i];
}
console.log(total)