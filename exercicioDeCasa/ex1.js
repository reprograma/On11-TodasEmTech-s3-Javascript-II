//EXERCICIO DE FUNCAO:

/* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/

let velPermitida = Number(prompt("Insira a Velocidade Permitida"))
let velCondutor = Number(prompt("Insira a Velocidade do Condutor"))

function velocidade(permitida,condutor){
    if(permitida>=condutor) 
 {alert("Sem Multa")} 

    else if(condutor <= permitida*1.1)
{alert("Multa Leve")}

    else 
{alert("Multa Grave")}

}
velocidade(velPermitida,velCondutor)

