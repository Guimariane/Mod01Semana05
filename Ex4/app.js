let numero = prompt("Digite um número:")


function calculaTabuada (numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero*i}`)
    }
}

calculaTabuada(numero)