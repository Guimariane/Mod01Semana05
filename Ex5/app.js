const somaTudo = (...numeros) => {
    const total = numeros.reduce((acc, num) => acc + num, 0);
    return total
}

const resultado = somaTudo(1, 3, 5, 7);
console.log(resultado)