const prompt = require('prompt-sync')();

const num1 = parseInt(prompt('Digite o primeiro número: '));
const num2 = parseInt(prompt('Digite o segundo número: '));
const num3 = parseInt(prompt('Digite o terceiro número: '));
let num4 = parseInt(prompt('Digite o quarto número: '));

console.log(`Primeiro número somado de 25: ${num1 + 25}`);
console.log(`Segundo número triplicado: ${num2 * 3}`);
console.log(`12% do terceiro número: ${num3 * 0.12}`);

num4 = num1 + num2 + num3;
console.log(`Soma dos três primeiros números: ${num4}`);