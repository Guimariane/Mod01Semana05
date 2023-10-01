// Construção da Função ConcatVetores

const concatVetores = (arrayA, arrayB) => {
    console.log([...arrayA, arrayB])
}

let arrayA = [1, 2, 3]
let arrayB = [4, 5, 6]

let novoArray = concatVetores(arrayA, arrayB)

console.log(novoArray)


// Construção da função MesclaObjetos

function mesclaObjetos(){
    return {...objUm, ...objDois}
}

let objUm = {a: 1, b: 2};
let objDois = {c: 3, d: 4}

let novoObjeto = mesclaObjetos(objUm, objDois);

console.log(novoObjeto)


