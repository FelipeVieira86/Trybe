//Faça um programa que receba um numero e retorne uma string em algarismos romanos.

let vetorRomano = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22 , 23, 24 , 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 444, 500, 999, 1000, 1020, 2020, 2556, 4444]
let numeroRomano = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];


function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  for (let i = 0; i < numeroRomano.length; i++) {
    if (num >= numeroRomano[i][0]) {
      return numeroRomano[i][1] + convertToRoman(num - numeroRomano[i][0]);
    }
  }
}

for (const key in vetorRomano) { console.log(convertToRoman(vetorRomano[key])); }
