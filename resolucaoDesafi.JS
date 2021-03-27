    var velocidadeCondutor = Number(prompt("Digite a velocidade do condutor"));
    var velocidadePermitida = Number(prompt("Digite a velocidade permitida"));


    if(velocidadeCondutor <= velocidadePermitida){
        alert("Sem Multa")
        }else if(velocidadeCondutor > velocidadePermitida){        

}
function calcular (){

    var multaLeve = (velocidadeCondutor * 10/100) + velocidadePermitida;

    if(velocidadeCondutor > velocidadePermitida && velocidadeCondutor <= multaLeve){
        alert("Multa Leve")
    }else{
        alert("Multa Grave")
        
    }
}


calcular()