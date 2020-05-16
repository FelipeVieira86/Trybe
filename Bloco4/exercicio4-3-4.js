//faça uma pirâmide com n asteriscos de base
let n = 9;
let numberOfLines = (n + 1) / 2;
let controlLeft = numberOfLines;
let controlRight = numberOfLines;
let lineInput = "";

for (let i = 0; i < numberOfLines; i+=1) {
  for (let lineColumn = 1; lineColumn <= n; lineColumn+=1) {
    if (lineColumn <= controlLeft && lineColumn >= controlRight) {
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