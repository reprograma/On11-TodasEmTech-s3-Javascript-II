function calcularMulta(){
    let velocidadePermitida = Number(prompt("Insira o limite de velocidade da pista: "));
    let velocidadeMotorista = Number(prompt("Insira a velocidadade do motorista: "));
    if(velocidadeMotorista <= velocidadePermitida*1.1){
        alert("Sem multa")
    }else if(velocidadeMotorista >= velocidadePermitida*1.2){
        alert("Multa Grave")
    }else{
        alert("Multa Leve")
    }
    }
calcularMulta()