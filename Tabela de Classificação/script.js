function adicionarNovoJogador() {
    var nome = document.getElementById("novoJogador").value // pega o valor do elemento nome
    var img = document.getElementById("novaImg").value // pega o valor do elemento imagem

    var jogadorPadrao = { // cria um jogador padrao
        img: img,
        nome: nome,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }

    jogadores.push(jogadorPadrao) //adiciona um jogador com nome no final do vetor
    exibirJogadoresNaTela(jogadores) // chama funcao
    nome = document.querySelector('#novoJogador').value = "" // limpa campo nome
    img = document.querySelector('#novaImg').value = ""  // limpa campo imagem
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [] // vetor vazio de jogadores padrao 

exibirJogadoresNaTela(jogadores) // chama a função para exibir jogadores na tela

// cria a função para exibir jogadores na tela
function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += `<tr><td><img src ="${jogadores[i].img}" id="imgTela"></td>`
        html += `<td>${jogadores[i].nome}</td>`
        html += `<td>${jogadores[i].vitorias}</td>`
        html += `<td>${jogadores[i].empates}</td>`
        html += `<td>${jogadores[i].derrotas}</td>`
        html += `<td>${jogadores[i].pontos}</td>`
        html += `<td><button onClick="adicionarVitoria(${i})">Vitória</button></td>`
        html += `<td><button onClick="adicionarEmpate(${i})">Empate</button></td>`
        html += `<td><button onClick="adicionarDerrota(${i})">Derrota</button></td></tr>`
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}