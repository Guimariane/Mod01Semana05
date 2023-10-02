function verificaPalindromo(palavra) {
    if(!palavra || !palavra.length) {
        return false
    }

    const reversedWord = palavra.split("").reverse().join("");
    return palavra === reversedWord
}

const teste1 = verificaPalindromo('ana')
console.log(teste1)

const teste2 = verificaPalindromo('julia')
console.log(teste2)