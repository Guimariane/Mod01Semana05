// Farei sobre o São Paulo pois não tem nada que me impeça de fazer sobre isso aushshusuhausha

const jogador = {
    nome: 'Jonathan Calleri',
    idade: 30,
    profissao: 'jogador de futebol, campeão da Copa do Brasil e pai do Corinthans'
}

function montaMensagem({nome, idade, profissao}) {
    return `Este é simplesmente ${nome}, ele tem ${idade} anos e é ${profissao}`
}

const mensagem = montaMensagem(jogador)
console.log(mensagem)