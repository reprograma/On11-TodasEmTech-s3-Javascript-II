let velocidade = Number(prompt("Digite a velocidade da via"))
let velocidadeCondutor = Number(prompt("Digite a velocidade do motorista")) 

function calcularMulta(){

if(velocidadeCondutor <= velocidade){
  alert("Sem Multa")

}

else if (velocidadeCondutor <= 1.10*velocidade){
  alert("Multa Leve")

}

else if (velocidadeCondutor > 1.20*velocidade){
  alert("Multa Grave")
}
}
calcularMulta()
