//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
 
let vetorRomano=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL','XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV','LV','LVI','LVII','LVIII','LIX','LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII','LXIX','LXX','LXXI','LXXII','LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX','LXXX','LXXXI','LXXXII','LXXXIII','LXXXIV','LXXXV','LXXXVI','LXXXVII','LXXXVIII','LXXXIX','XC','XCI','XCII','XCIII','XCIV','XCV','XCVI','XCVII','XCVIII','XCIX','C', 'CDXLIV', 'IM', 'M' ,'MMXX']
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
//  for (i in numeroRomano) {
    for (j = 0; j < numSeparado.length; j += 1) {
      if (numeroRomano[numSeparado[j]] < numeroRomano[numSeparado[j+1]]) {
        soma -= numeroRomano[numSeparado[j]];
      } else { (numeroRomano[numSeparado[j]] < numeroRomano[numSeparado[j+1]]) 
        soma += numeroRomano[numSeparado[j]];
      }
    }
    return soma;
  }
//}
 
for (const key in vetorRomano) { console.log(convertFromRoman(vetorRomano[key])); }
