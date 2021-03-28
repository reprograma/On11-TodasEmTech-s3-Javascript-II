    //EXERCICIO DE FUNCAO:

    /* Elabore um programa que leia a velocidade permitida em uma estrada e a 
    velocidade de um condutor.
    Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem 
    "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
    exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade 
    permitida, exiba "Multa Grave."*/
    function multa() {
        let velocidadePermitida = Number(prompt("Digita a velocidade permitida da via"));
        let velocidadeCondutor = Number(prompt("Velocidade do Condutor"));

        if (velocidadeCondutor <= velocidadePermitida) {
            alert("Sem multa");
        } else if (velocidadeCondutor <= ((velocidadePermitida * 110) / 100)) {
            alert("Multa leve");
        } else if (velocidadeCondutor > ((velocidadePermitida * 120) / 100) && velocidadeCondutor < ((velocidadePermitida * 20) / 1000)) {
            alert("Multa Media");
        } else {
            alert("Multa Grave");
        }
    }
    multa()