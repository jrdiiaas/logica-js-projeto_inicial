alert(`Boas vindas ao jogo do número secreto!`);
let numeroSecreto = 29;
let chute;
console.log(numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Faça uma jogada, digite um número:`);
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você acertou!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}, tente novamente.`);
        } else {
            alert(`O número secreto é maior que ${chute}, tente novamente.`);
        }
    }
}