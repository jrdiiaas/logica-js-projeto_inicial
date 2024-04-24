alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 29;
let chute = prompt('Faça a sua primeira tentativa, digite um número:');

if (chute == numeroSecreto) {
    console.log('Isso aí! Você acertou!')
} else {
    console.log('Não foi dessa vez, aperte F5 e tente novamente!')
}