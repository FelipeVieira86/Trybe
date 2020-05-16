//Faça um programa que diz se um número definido numa variável é primo ou não.


let numero = 11;
let primo = 0;

for (i = 1; i <= numero; i += 1) {
  if ( numero % i == 0) {
    primo += 1;
  }
}
if (primo < 3) {
  console.log("esse numero é primo")
} else {
  console.log("esse numero n é primo")
}