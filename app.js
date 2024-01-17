alert("Boas vindas ao jogo do número secreto!");

let numSecret = 5;

let chute = prompt("escolha um número entre 1 e 10");
// se chute for igual ao número secreto
if (numSecret == chute) {
  alert(`isso aí! Você descobriu o número secreto, que é \n ${numSecret}`);
} else {
  if (numSecret < chute) {
    alert(`O número secreto é menor que ${chute}`);
  } else {
    alert(`o número secreto é maior que ${chute}`);
  }
}
// acoplamento, template strings em javascript
