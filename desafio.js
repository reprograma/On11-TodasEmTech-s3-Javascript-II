// DESAFIO 


//EXERCICIO DE FUNCAO:

/* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/

function calcularMulta(){
    var velocidadePista = Number(prompt("Velocidade permitida"));
    var velocidadeCondutor= Number(prompt("Velocidade do condutor"));

    if (velocidadePista == "" || velocidadeCondutor == "" ){
        return calcularMulta()
    } 

    if (velocidadeCondutor >=(velocidadePista * 0.20) + velocidadePista){
        alert("Multa Grave");
       } else if (velocidadeCondutor >=(velocidadePista * 0.10) + velocidadePista){
        alert("Multa Leve"); 
       
       } else { 
            alert("Sem Multa");
    
       }
        
}

calcularMulta()

