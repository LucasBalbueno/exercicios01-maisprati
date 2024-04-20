const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));

function calculaMedia (nota1, nota2) {
    return (nota1 + nota2) / 2;
}

if (calculaMedia(nota1, nota2) >= 6.0) {
    console.log('PARABÉNS! Você foi aprovado!');
} else {
    console.log('Você foi REPROVADO! Estude mais');
}