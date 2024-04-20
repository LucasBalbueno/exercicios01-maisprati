const prompt = require('prompt-sync')();

let num

while (num >= 0 || num !== null) {
    num = Number(prompt('Digite um número: '));
    
    if (num < 0 || num === null) {
        console.log('Leitura de números encerrados.');
        break
    }
    
    if (num % 2 == 0) {
        console.log(`O número ${num} é par`)
    } else {
        console.log(`O número ${num} é ímpar`)
    }
}

console.log('Fim do programa')