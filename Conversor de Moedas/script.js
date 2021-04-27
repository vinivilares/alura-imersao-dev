var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.75
var valorEmRealFixado = valorEmReal.toFixed(2)
alert(valorEmRealFixado)