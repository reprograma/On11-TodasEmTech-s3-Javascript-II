    //EXERCICIO DE FUNCAO Parametro :

    /* Elabore um programa que leia a velocidade permitida em uma estrada e a 
    velocidade de um condutor.
    Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem 
    "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
    exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade 
    permitida, exiba "Multa Grave."*/

    let velocidadePermitida = Number(prompt("Digita a velocidade permitida da via"));
    let velocidadeCondutor = Number(prompt("Velocidade do Condutor"));

    function multa(vPermitida, vCondutor) {
        if (vCondutor <= vPermitida) {
            alert("Sem multa");
        } else if (vCondutor <= ((vPermitida * 110) / 100)) {
            alert("Multa leve");
        } else if (vCondutor > ((vPermitida * 120) / 100) && vCondutor < ((vPermitida * 120) / 100)) {
            alert("Multa Media");
        } else {
            alert("Multa Grave");
        }
    }
    multa(velocidadePermitida, velocidadeCondutor)