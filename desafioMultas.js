var veloPermitida = Number(prompt("Informe a velocidade máxima permitida na Via: "));
var veloCondutor = Number(prompt("Informe a velocidade do condutor: "));

function calcularMulta(){

    if (veloCondutor < veloPermitida+veloPermitida*0.10 )  {
    alert("Sem Multas");
    }else if (veloCondutor >= veloPermitida+veloPermitida*0.20 ) {
         alert("Multa Grave");
        } else if (veloCondutor >= veloPermitida+veloPermitida*0.10) {
            alert("Multa Leve");
           }

}
calcularMulta()