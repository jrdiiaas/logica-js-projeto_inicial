alert(`Boas vindas ao jogo do número secreto!`);
let numeroSecreto = 29;
let chute = prompt(`Faça a sua primeira tentativa, digite um número:`);

if (chute == numeroSecreto) {
    console.log(`Isso aí! Você acertou!`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}, tente novamente apertando F5 no seu teclado.`);
    } else {
        alert(`O número é maior que ${chute}, tente novamente apertando F5 no seu teclado.`);
    }
}