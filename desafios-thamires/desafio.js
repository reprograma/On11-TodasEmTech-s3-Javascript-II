// DESAFIO 

//EXERCICIO DE FUNCAO:

/* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/

var permitida = Number(prompt("Digite a velocidade permitida na estrada:"))
var veloc = Number( prompt(" Digite sua velocidade: "))



function multa(permitida, veloc){
    if(permitida >= veloc ){
        alert("Sem multas");

    } else if( veloc <= 1.1*permitida){
        alert("Multa Leve");

    } else if(veloc >1.2*permitida){
        alert("Multa Grave");
    }
}

multa(permitida, veloc)



