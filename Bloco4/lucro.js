//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
//o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto 
//de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender 
//mil desses produtos.

//Atente que, sobre o custo do produto, incide um imposto de 20%.

let custo = 20;
let venda = 100;
let valor = (venda - custo);
let imposto = 20;
let lucro = ((valor * 1000) * ((100 - imposto) / 100));
console.log(lucro.toFixed(2));