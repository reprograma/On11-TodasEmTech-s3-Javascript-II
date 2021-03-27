/* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/



function multa (){
 alert("Confira se o motorista foi multado:");
 var velocidadePermitida = Number(prompt("Infome a velocidade permitida na estrada:"));
 var velocidadeCondutor = Number(prompt("Qual a velocidade do condutor?"));
 var multaLeve = velocidadePermitida * 0.1
 var multaPesada = velocidadePermitida * 0.2

 if (velocidadeCondutor <= velocidadePermitida){
  alert("Sem multa: você está dentro da velocidade permitida");
 } else if (velocidadeCondutor - velocidadePermitida <= multaLeve){
  alert("Opa! Você utltrapassou levemente a velocidade permitida e receberá uma multa leve.");
 } else {
  alert("PERIGO! Você ultrapassou a velocidade permitida e receberá uma multa grave.");
 }
}

multa()



//DESAFIO DE REPETIÇAO e FUNCAO

//Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )



function multiplos(){
 var numero = Number(prompt("Por favor, digite um número maior que 0 e menor que 100:"))

 if(numero < 0 || numero > 100){
  return multiplos ()
 }

 for(var i = 1; i <= 100; i++){
  var calculo = numero * i
  alert(`O múltipo de ${numero} será: ${calculo}`)
 }


}

multiplos()