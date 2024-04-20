const prompt = require('prompt-sync')();

const numMacas = parseInt(prompt('Digite o número de maçãs compradas: '));

function calculaMacas (numMacas) {
    if (numMacas < 12) {
        console.log(`O valor a ser pago é R$${(numMacas * 0.30).toFixed(2)}`);
    } else {
        console.log(`O valor a ser pago é R$${(numMacas * 0.25).toFixed(2)}`);
    }
}

if (numMacas < 0) {
    console.log('Número inválido');
} else {
    calculaMacas(numMacas)
}
