/* DESAFIO 
EXERCICIO DE FUNCAO:
Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". 
Se a velocidade for de até 10% maior que a permitida,
exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/

const velocidadePermitida = 80
alert('Atenção! A velocidade máxima permitida nessa via é de 80km/h')
let velocidadeCondutor = Number(prompt('Digite, em km/h, a velocidade do condutor'))

function radarVelocidade(maximaDaVia, atualMotorista){

    if(atualMotorista == ''){
        return radarVelocidade(maximaDaVia, atualMotorista)
    }

    if(atualMotorista <= maximaDaVia){
        alert('SEM MULTA')
    
    }else if((atualMotorista <= ((maximaDaVia * 0.1) + maximaDaVia))){
        alert('MULTA LEVE')

    }else if((atualMotorista <= ((maximaDaVia * 0.2) + maximaDaVia))){
        alert ('MULTA GRAVE')
      
    }else{
        alert('MULTA GRAVE')
    
    }
}

radarVelocidade(velocidadePermitida, velocidadeCondutor)