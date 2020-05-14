//faça uma pirâmide com n asteriscos de base

let n = 5;
let line = "";
for (i = 0; i < n-3; i += 1){
  line += " ";
}
  line += "*";
  console.log(line);
for (j = 1; j < n; j += 2){
  line = line.substring(1);
  line += "**";
  console.log(line);
}

