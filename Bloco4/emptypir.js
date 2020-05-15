//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar:

let n = 11;
let line = "";
let quantidadeespacos = 1;
let coluna = 0;
for (i = 0; i <= n - 5; i += 1) {
  line += " ";
}
line += "*"
console.log(line)
for (coluna = 2; coluna < n-3; coluna += 1) {
  for (e = 0; e < quantidadeespacos; e += 1) {
    line += " ";
  }
  if (quantidadeespacos < 2) {
  quantidadeespacos += 1;
  }
  line += "*"
  line = line.substring(1);
  console.log(line);
  line = line.slice(0, -1);
}
line = line.replace(/ /g,"*")
line += "**";
console.log(line);




