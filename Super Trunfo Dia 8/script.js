var cartaPaulo = {
    nome: "Gilberto Barros",
    imagem: "https://yt3.ggpht.com/ytc/AAUvwnijpAmWlngB6arjLwu1oLbg5GYVI71tPaoQM_1_Ig=s900-c-k-c0x00ffffff-no-rj",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 77
    }
}

var cartaRafa = {
    nome: "Silvio Santos",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Silvio_Santos_em_maio_de_2019.jpg/1200px-Silvio_Santos_em_maio_de_2019.jpg",
    atributos: {
        ataque: 99,
        defesa: 99,
        magia: 99
    }
}

var cartaGui = {
    nome: "Sonia Abrão",
    imagem: "https://veja.abril.com.br/wp-content/uploads/2018/02/entrete-sonia-abrao.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 70
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = `<div id="opcoes" class="carta-status">`
    divCartaJogador.innerHTML = moldura + nome + html+ opcoesTexto + "</div>"
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
    divResultado.innerHTML = htmlResultado

    exibeCartaMaquina()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = `<div id="opcoes" class="carta-status">`
    divCartaMaquina.innerHTML = moldura + nome + html+ opcoesTexto + "</div>"
}