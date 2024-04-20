let contador = 0;
let numero = 101;

while (contador < 50) {
    let isPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) {
        console.log(numero);
        contador++;
    }

    numero++;
}