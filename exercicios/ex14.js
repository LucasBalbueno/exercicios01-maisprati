const prompt = require('prompt-sync')();

let dec;
let soma = 0;
let count = 0;

while (dec !== 0) {
    dec = parseFloat(prompt('Digite um número decimal: '));
    soma += dec;
    count++;
}

console.log(`A média artimética desses número é ${(soma / (count -1).toFixed(2))}`)