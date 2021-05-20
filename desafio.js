
    /* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/
    
    function ChecarVelocidade(){
        var velocidadePermitida = Number(prompt("Insira a velocidade permitida: "))
        var velocidadeCondutor = Number(prompt("Insira a velocidade do condutos: "))
        if (velocidadeCondutor <= velocidadePermitida){
            alert("Sem Multa")
        }
    
    else if(velocidadeCondutor<= 1.10*velocidadePermitida){ 
        alert("Multa Leve")
    }
    else if(velocidadeCondutor > 1.20*velocidadePermitida ) {
        alert("Multa Grave")
    }
    }
    ChecarVelocidade()


//DESAFIO DE REPETIÇAO e FUNCAO

//Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )


    function multiplos(){
        var numero = Number(prompt("Por favor, digite um número entre 0 e 100:"))
       
        if(numero < 0 || numero > 100){
         return multiplos ()
        }
       
        for(var i = 1; i < 100; i++){
         var calculo = numero * i
         alert(`O múltipo de ${numero} é: ${calculo}`)
        }
       
       
       }
       
       multiplos()

