function tabuada() {

    var numero = Number(prompt('Informe um número!'))

    for (let i = 0; i <= 10; i++) {
        document.write(numero + " x " + i + " = " + (numero*i) + "<br>")        
    }
}
tabuada()