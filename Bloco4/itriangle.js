//faça um programa que imprima um triângulo retângulo com n asteriscos de base. inverta o lado do triangulo.

let n = 5;
let line = "";
for (i = 0; i < n; i += 1){
  line += " ";
}
for (j = 0; j < n; j += 1){
  line = line.substring(1);
  line += "*";
  console.log(line);
}