//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar:

let n = 9;
let numberOfLines = (n + 1) / 2; // 5
let controlLeft = numberOfLines; // 5
let controlRight = numberOfLines; // 5
let lineInput = "";

for (let i = 0; i < numberOfLines; i+=1) {
  for (let lineColumn = 1; lineColumn <= n; lineColumn+=1) {
    // Se é a última linha, preenche com * em tudo
    if (i === (numberOfLines - 1)) {
      lineInput = lineInput + "*";
    // Para todas as outras linhas, utilizar as variáveis de
    } else if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput = lineInput + "*";
    } else {
      lineInput = lineInput + " ";
    }
  }
  console.log(lineInput);
  lineInput = "";
  controlRight -= 1; // 5 - 4 - 3 - 2 - 1
  controlLeft += 1; // 5 - 6 - 7 - 8 - 9
}