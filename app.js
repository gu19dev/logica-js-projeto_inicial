alert("Boas vindas ao jogo do número secreto!");

let numSecret = 5;

let chute = prompt("escolha um número entre 1 e 10");
// se chute for igual ao número secreto
if (numSecret == chute) {
  console.log("isso aí! Você descobriu o número secreto (5)");
} else {
  alert("você errou :(");
}
