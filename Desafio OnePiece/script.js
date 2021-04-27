function enviar() {
    var nome = document.getElementById("texto").value

    nome = nome.toUpperCase()
    if (nome == "ZORO DE BIGODE") {
        alert("Você acertou seu bobão!")
    } else {
        alert("Você errou!")
    }
}