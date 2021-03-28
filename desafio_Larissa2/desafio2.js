//DESAFIO DE REPETIÇAO e FUNCAO

//Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )

function calcular (){
    var numInserido = document.getElementById("numero").value
    document.write("Os multiplos do número "+numInserido +" são:"+"<br>")
    for(var i=0; i<=100; i++){
        var multiplos= numInserido*i
        document.write (multiplos+"<br>")
    
    }
}
var botao= document.getElementById("botao")
botao.setAttribute("onclick","calcular()")