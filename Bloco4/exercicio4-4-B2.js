//Faça um programa que receba um numero e retorne uma string em algarismos romanos.
var numeroRomano = [
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
  for (var i = 0; i < numeroRomano.length; i++) {
    if (num >= numeroRomano[i][0]) {
      return numeroRomano[i][1] + convertToRoman(num - numeroRomano[i][0]);
    }
  }
}
console.log(convertToRoman(9));
console.log(convertToRoman(91));
console.log(convertToRoman(19));
console.log(convertToRoman(235));
console.log(convertToRoman(444));