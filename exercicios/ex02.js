const prompt = require('prompt-sync')();

const eleitores = parseInt(prompt('Digite o número de eleitores: '));
const votosBrancos = parseInt(prompt('Digite o número de votos em branco: '));
const votosNulos = parseInt(prompt('Digite o número de votos nulos: '));
const votosValidos = parseInt(prompt('Digite o número de votos válidos: '));

const totalVotos = votosBrancos + votosNulos + votosValidos;

function calculaVotos (eleitores, votosBrancos, votosNulos, votosValidos) {
    const percentualVotosBrancos = (votosBrancos / eleitores) * 100;
    const percentualVotosNulos = (votosNulos / eleitores) * 100;
    const percentualVotosValidos = (votosValidos / eleitores) * 100;

    console.log(`Percentual de votos em branco: ${percentualVotosBrancos}%`);
    console.log(`Percentual de votos nulos: ${percentualVotosNulos}%`);
    console.log(`Percentual de votos válidos: ${percentualVotosValidos}%`);
}

if (eleitores !== totalVotos) {
    console.log('O número de votos deve ser o mesmo número de eleitores');
} else {
    calculaVotos(eleitores, votosBrancos, votosNulos, votosValidos);
}