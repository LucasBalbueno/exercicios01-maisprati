const prompt = require('prompt-sync')();

const num1 = parseInt(prompt('Digite o primeiro número: '));
const num2 = parseInt(prompt('Digite o segundo número: '));

function calculaMaior (num1, num2) {
    let maior = [num1, num2];

    if (num1 === num2) {
        console.log('Os números não podem ser iguais.');
    } else {
        if (num2 < num1) {
            maior = [num2, num1];
        }
        console.log(`A ordem crescente é: ${maior[0]}, ${maior[1]}`);
    } 
}

calculaMaior(num1, num2);