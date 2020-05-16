//faça um programa que, dado um valor n qualquer, 
//seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let line = "";
for (let j = 0; j < n; j += 1){
  line += "*";
}
for (let i = 0; i < n; i += 1) {
  console.log(line);
}