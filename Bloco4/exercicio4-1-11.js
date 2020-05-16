/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto
o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de 
impostos, use as seguintes referências:

INSS

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/

let salario = 5190;
let base
let INSS
let IR
let liquido
let parcelaIR

if (salario < 1556.95) {
  INSS = 8;
  base = (salario * ( 1 - (INSS / 100)));
} else if (salario >= 1556.95 && salario <= 2594.92) {
  INSS = 9;
  base = (salario * ( 1 - (INSS / 100)));
} else if (salario >= 2594.93 && salario <= 5189.82) {
  INSS = 11;
  base = (salario * ( 1 - (INSS / 100)));
} else {
  INSS = 11;
  base = (salario - 570.88)
}
let valorINSS = (salario * ((INSS / 100)));
if (base < 1903.99) {
  IR = 0;
  parcelaIR = 0;
  liquido = (base - ((base * ((IR / 100))) - parcelaIR));
} else if (base >= 1903.99 && base <= 2826.65) {
  IR = 7.5;
  parcelaIR = 142.80;
  liquido = (base - ((base * ((IR / 100))) - parcelaIR));
} else if (base >= 2825.66 && base <= 3751.05) {
  IR = 15;
  parcelaIR = 354.80;
  liquido = (base - ((base * ((IR / 100))) - parcelaIR));
} else if (base >= 3751.06 && base <= 4664.68) {
  IR = 22.5;
  parcelaIR = 636.13;
  liquido = (base - ((base * ((IR / 100))) - parcelaIR));
} else {
  IR = 27.5;
  parcelaIR = 869.36;
  liquido = (base - ((base * ((IR / 100))) - parcelaIR));
}
console.log("base = R$" + base.toFixed(2));
console.log("INSS = " + INSS +"%");
console.log("Valor INSS = R$" + valorINSS.toFixed(2))
console.log("IR = " + IR +"%");
console.log("par IR = R$" + parcelaIR.toFixed(2));
console.log("salario liquido = R$" + liquido.toFixed(2));