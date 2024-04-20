const prompt = require('prompt-sync')();

const codigo = parseInt(prompt('Digite o código do produto: '));

switch (true) {
    case (codigo === 1):
        console.log('Sul');
        break;
    case (codigo === 2):
        console.log('Norte');
        break;
    case (codigo === 3):
        console.log('Leste');
        break;
    case (codigo === 4):
        console.log('Oeste');
        break;
    case (codigo === 5 || codigo === 6):
        console.log('Nordeste');
        break;
    case (codigo >= 7 && codigo <= 9):
        console.log('Sudeste');
        break;
    case (codigo >= 10 && codigo <= 20):
        console.log('Centro-Oeste');
        break;
    case (codigo >= 25 && codigo <= 50):
        console.log('Nordeste');
        break;
    default:
        console.log('Produto importado');
        break;
}
