const prompt = require('prompt-sync')();

let tempCelsius = parseInt(prompt('Digite a temperatura em Celsius (ºC): '));

function calculaTemp (celsius) {
    const fahrenheit =  (celsius * 1.8) + 32;
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit} ºF`);
}

calculaTemp(Math.trunc(tempCelsius));