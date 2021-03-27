var entrada =Number(prompt("digite um numero ai"))

function subtrair(){
    var numero1 = Number(prompt("digite seu primeiro numero:"));
    var numero2 = Number(prompt("digite seu segundo numero:"));

var subtrair = numero1-numero2

alert(subtrair);
}



if(entrada==2){
    subtrair()

}



if(velocidadeCondutor <= velocidadePermitida){
    alert("Sem Multa")
}else if(velocidadeCondutor <= multaLeve){
        alert("Multa Leve")
    }else{
        alert("Multa Grave")     
}
}

