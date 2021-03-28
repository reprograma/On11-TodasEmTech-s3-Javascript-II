function tabuada() {

    var numero = Number(prompt('Informe um número!'))
    var i = 0
    while (i <= 10){

        document.write(numero + " x " + i + " = " + (numero*i) + "<br>")
        i++

    }
}
tabuada()