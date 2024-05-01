alert(`Boas vindas ao jogo do número secreto!`);
let numeroSecreto = 29;
let chute;
let tentativa = 1;
// console.log(numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Faça uma jogada, digite um número:`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}, tente novamente.`);
        } else {
            alert(`O número secreto é maior que ${chute}, tente novamente.`);
        }
    }
    tentativa++;
}
if (tentativa > 1) {
    alert(`Isso aí! Você acertou com ${tentativa} tentativas.`);
} else {
    alert(`Isso aí! Você acertou com ${tentativa} tentativa.`);
}