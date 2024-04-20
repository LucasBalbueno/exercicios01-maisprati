let num = 101;
let contador = 0;

while(contador < 50) {
    let divisores = 0;
    let i = 1;

    while(i <= num) {
        if(num % i === 0) {
            divisores++;
        }
        i++;
    }

    if(divisores === 2) {
        console.log(num);
        contador++;
    }

    num++;
}