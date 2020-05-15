// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro 
// e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color 
// Comics #178”, “O último MacPatinhas”, “Sim”.

// Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let margaridaInfo = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
}
let tioPatinhasInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

for (i in margaridaInfo && tioPatinhasInfo) {
    if (i !== "recorrente") {
    console.log (margaridaInfo[i] + " e " +tioPatinhasInfo[i]);
  } else if (margaridaInfo[i] !== tioPatinhasInfo[i]) {
    console.log (margaridaInfo[i] + " e " +tioPatinhasInfo[i]);
  } else {
    console.log ("Ambos recorrentes");
  }
}
