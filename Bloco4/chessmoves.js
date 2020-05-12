//Escreva um programa que receba o nome de uma peça de xadrez e 
//retorne os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras 
//maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

let piece = "cavalo";

switch (piece.toLowerCase()) {
  case "peão": {
    console.log("uma casa pra frente");
    break;  
  }
  case "torre": {
    console.log("vertical ou horizontal quantas casas desejar");
    break;
  }
  case "cavalo": {
    console.log("L");
    break;
  }
  case "bispo": {
    console.log("diagonais quantas casas desejar")
    break;
  }
  case "dama": {
    console.log("vertical, horizontal ou diagonal quantas casas desejar");
    break;
  }
  case "rei": {
    console.log("vertical, horizontal ou diagonal somente uma casa");
    break;
  }
  default: {
    console.log("peça invalida")
  }
}
