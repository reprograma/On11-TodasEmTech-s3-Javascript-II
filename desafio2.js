/*DESAFIO DE REPETIÇAO e FUNCAO
Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )*/

var numero = Number(prompt('Digite um número para exibir os seus múltiplos:'))

function multiplos(num){

    for (i = 1; i <= 100; i++){
    
        if(num % i == 0){
            console.log(i)
        }
    }
}

multiplos(numero)