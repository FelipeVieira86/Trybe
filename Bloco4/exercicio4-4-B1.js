//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let numeroRomano = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000,
}

function convertFromRoman(num) {
  let soma = 0;
  let numSeparado = num.split("");
  for (i in numeroRomano) {
    for (j = 0; j < numSeparado.length; j += 1) {
      if (numeroRomano[numSeparado[j]] < numeroRomano[numSeparado[j+1]]) {
        soma -= numeroRomano[numSeparado[j]];
      } else { (numeroRomano[numSeparado[j]] < numeroRomano[numSeparado[j+1]]) 
        soma += numeroRomano[numSeparado[j]];
      }
    }
    return soma;
  }
}
 

console.log("III 3: " + convertFromRoman("III"));
console.log("VII 7: " + convertFromRoman("VII"));
console.log("XLIX 49: " + convertFromRoman("XLIX"));
console.log("LIX 59: " + convertFromRoman("LIX"));
console.log("XI 11: " + convertFromRoman("XI"));
console.log("X 10: " + convertFromRoman("X"));
console.log("XL 40: " + convertFromRoman("XL"));
console.log("M 1000: " + convertFromRoman("M"));
console.log("MMXX 2020: " + convertFromRoman("MMXX"));
console.log("XXI 21: " + convertFromRoman("XXI"));
console.log("IM 999: " + convertFromRoman("IM"))
console.log("CDXLIV 444: " + convertFromRoman("CDXLIV"))