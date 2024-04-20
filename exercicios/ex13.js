const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
    let n = Number(prompt('Digite um número: '));

    for (let i = 1; i <= n; i++) {
        console.log(`${i} x ${n} = ${i * n}`)
    }
}