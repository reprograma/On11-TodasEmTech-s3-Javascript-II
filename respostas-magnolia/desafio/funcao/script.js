/*  Desafio de Função:
*   Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
*   Se a velocidade for inferior ou igual a velocidade permitida, exiba a mensagem "Sem Multa".
*   Se a velocidade for de até 10% maior que a permitida, exiba "Multa Leve".
*   E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave."
*/

function velocidade() {

    let velocidadePermitida = Number(prompt('Informe a velocidade permitida'))
    let velocidadeCondutor = Number(prompt('Informe a velocidade do condutor'))
    let multa10 = velocidadePermitida + ((velocidadePermitida * 10) / 100)
    let multa20 = velocidadePermitida + ((velocidadePermitida * 20) / 100)

    if(velocidadeCondutor <= velocidadePermitida) {

        alert('Sem Multa!')

    } else {

        if(velocidadeCondutor >= multa10 && velocidadeCondutor < multa20) {

            alert('Multa Leve!')

        } else {

            alert('Multa Grave!')

        }
    }
}
velocidade()