/* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/

//function sem parâmetro
function velocidadePermitida1 () {
    let velocidadeLimite = Number(prompt("Qual é a velocidade permitida na estrada?"));
    let velocidadeCondutor = Number(prompt("Qual a velocidade que o condutor estava?"));
    if (velocidadeCondutor <= velocidadeLimite){
        alert("Sem multa!");
    } else {
        let multaDezPorCento = velocidadeLimite * 1.10;
        let multaVintePorCento = velocidadeLimite * 1.20;
        if(velocidadeCondutor <= multaDezPorCento){
            alert("Multa Leve");
        } else {velocidadeCondutor > multaVintePorCento
            alert("Multa grave!");
        }
    }
}

velocidadePermitida1();