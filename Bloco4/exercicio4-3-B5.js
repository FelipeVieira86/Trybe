//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar:

let n = 9;
let numberOfLines = (n + 1) / 2;
let controlLeft = numberOfLines;
let controlRight = numberOfLines;
let lineInput = "";

for (let i = 0; i < numberOfLines; i+=1) {
  for (let lineColumn = 1; lineColumn <= n; lineColumn+=1) {
    if (i === (numberOfLines - 1)) {
      lineInput = lineInput + "*";
    } else if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput = lineInput + "*";
    } else {
      lineInput = lineInput + " ";
    }
  }
  console.log(lineInput);
  lineInput = "";
  controlRight -= 1;
  controlLeft += 1; 
}