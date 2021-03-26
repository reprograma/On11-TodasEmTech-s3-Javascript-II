/* Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
   Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa". Se a velocidade for de até 10% maior que a permitida,
   exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."*/

   function radar () {

    let velocidadeVia = Number(prompt("Digite a velocidade permitida da via: "));

    let velocidadeCondutor = Number(prompt("Digite a velocidade do condutor: "));

    if (velocidadeCondutor == ""){
        return radar()
    }

    if (velocidadeCondutor <= velocidadeVia){

        alert("Sem multa!");

    } else {

        let multa1 = velocidadeVia * 1.10;

        let multa2 = velocidadeVia * 1.20;

        if(velocidadeCondutor <= multa1){

            alert("Multa Leve!");

        } else if(velocidadeCondutor > multa2){

            alert("Multa Grave!");

        } else {

        alert("Você ultrapassou a velocidade e irá sofrer uma multa");
        
        }
    }
}

radar();