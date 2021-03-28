
let velocidadePermitida;
let velocidadeCondutor;
const porcentagemPermitidaLeve = 0.10;
const porcentagemPermitidaGrave = 0.20;

velocidadePermitida = Number(prompt("Insira a velocidade permitida: "));     
velocidadeCondutor = Number(prompt("Insira a velocidade do condutor: "));

calcValocidade(velocidadeCondutor, velocidadePermitida);

function calcValocidade(velocidadeCondutor, velocidadePermitida){
    let velocidadeMaxMultLeve = (velocidadePermitida * porcentagemPermitidaLeve) + velocidadePermitida;
    let velocidadeMaxMultGrave = (velocidadePermitida * porcentagemPermitidaGrave) + velocidadePermitida;
    if(velocidadeCondutor <= velocidadePermitida){
        alert("Sem multa!!!");
    } else if (velocidadeCondutor <= velocidadeMaxMultLeve){
        alert("Multa leve!!!");
    } else if (velocidadeCondutor > velocidadeMaxMultGrave) {
        alert("Multa grave!!!");
    } else {
        alert("Sem tratamento!!!");
    }
}