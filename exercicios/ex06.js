const prompt = require('prompt-sync')();

const valorA = parseInt(prompt('Digite o primeiro valor: '));
const valorB = parseInt(prompt('Digite o segundo valor: '));
const valorC = parseInt(prompt('Digite o terceiro valor: '));

const verificaTriangulo = function (a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        return true;
    } else {
        return false;
    }
}

const tipoTriangulo = function (a, b, c) {
    let tipo = '';

    if (verificaTriangulo(a, b, c)) {
        if (a === b && b === c) {
            tipo = 'Equilátero';
        } else if (a === b || a === c || b === c) {
            tipo = 'Isósceles';
        } else {
            tipo = 'Escaleno';
        }
        console.log(`Os valores ${valorA}, ${valorB} e ${valorC} formam um triangulo do tipo: ${tipo}`);
    } else {
        console.log('Os valores informados não formam um triângulo.')
    }
}

tipoTriangulo(valorA, valorB, valorC);