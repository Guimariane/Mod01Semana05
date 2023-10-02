function calculaPA(inicial, raiz) {
    const pa = [inicial]

    for (let i = 1; i < 10; i++) {
        const antecessor = pa[i - 1]
        pa.push(antecessor + raiz)
    }

    console.log(pa)
}

const inicial = 2
const raiz = 2

const resultPA = calculaPA(inicial, raiz)
console.log(resultPA)