const velocidadePermitida = 60
let velocidadeMotorista = prompt("Insira a velocidade do motorista")

if (velocidadeMotorista<=velocidadePermitida){
    document.write ("Você está dentro da velocidade permitida e não pagará multa.")
}else if(velocidadeMotorista>velocidadePermitida && velocidadeMotorista<=velocidadePermitida*1.1){
    document.write ("Você ultrapassou até 10% da velocidade permitida, sendo uma infração leve.")
}else if(velocidadeMotorista>velocidadePermitida*1.1){
    document.write("Você ultrapassou acima de 10% da velocidade permitida, sendo uma infração grave.")
}