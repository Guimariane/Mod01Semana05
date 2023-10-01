function procuraMinMax (numeros) {

    if (!numeros || !numeros.length) {
        alert("Não foi possível encontrar")
        return;
    }

    let min = Math.min(...numeros);
    let max = Math.max(...numeros);

    console.log(`Min: ${min}. Max: ${max}.`);
}

const numeros = [20, 30, 10]
procuraMinMax(numeros)