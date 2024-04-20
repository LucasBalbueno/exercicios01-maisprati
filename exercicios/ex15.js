const prompt = require('prompt-sync')();

let somaPonderada = 0;
let somaPesos = 0;
let numero = parseFloat(prompt("Digite um número:"));
let peso = parseFloat(prompt("Digite o peso do número:"));

while (numero != 0) {
    somaPonderada += numero * peso;
    somaPesos += peso;

    numero = parseFloat(prompt("Digite um número (ou 0 para sair):"));
    if (numero != 0) {
        peso = parseFloat(prompt("Digite o peso do número:"));
    }
}

if (somaPesos != 0) {
    let mediaPonderada = somaPonderada / somaPesos;
    console.log(`A média ponderada é ${mediaPonderada}`);
} else {
    console.log("Não foi possível calcular a média ponderada, pois a soma dos pesos é 0.");
}