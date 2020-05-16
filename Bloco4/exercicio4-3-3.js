//faça um programa que imprima um triângulo retângulo com n asteriscos de base. inverta o lado do triangulo.

let n = 5;
for (i = 1; i <= n; i += 1){
  let space = "";
  for (j = n - i; j > 0; j -= 1){
    space += " ";
  }
  let line = "";
  for (k = n - i; k < n; k += 1){
    line += "*"; 
  }
  console.log(space+line);
}
