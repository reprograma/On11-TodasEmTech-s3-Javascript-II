
let resultado = document.querySelector('div#res');

const btnCalcular = document.querySelector('input#btnCalcular');
btnCalcular.addEventListener('click', calcularMulta);

export default function calcularMulta() {

    var velVeiculo = document.querySelector('input#velVeiculo');
    const lmtVelocidadeMax = 55;
    const velMais10Porcento = lmtVelocidadeMax * 1.10;
    const velMais20Porcento = lmtVelocidadeMax * 1.20;
    console.log(Number(velVeiculo.value));
    console.log(velMais10Porcento);
    console.log(velMais20Porcento);

    if (Number(velVeiculo.value) == "") {
        alert("[ERRO] Insira a velocidade do veículo!");
    }
    else {
        if ( Number(velVeiculo.value) < velMais10Porcento ) {
            console.log("sem multa"); 
            resultado.innerHTML = `Velocidade do veículo é: ${ Number(velVeiculo.value) }KM/h.
            <br><strong>PARABENS!<strong> Você dentro do limite da Velocidade!<br>
            Sempre use o sinto de segurança.`
            velVeiculo.value = "";
            velVeiculo.focus();         


        } else if ( Number(velVeiculo.value) >= velMais10Porcento && Number(velVeiculo.value) < velMais20Porcento ) {
            console.log("10%");
            resultado.innerHTML = `Velocidade do veículo é: ${ Number(velVeiculo.value) }KM/h.
            <br><strong>Multa Leve!<strong> Você ultrapassou o limite da Velocidade em até 10%<br>
            Sempre use o sinto de segurança.`
            velVeiculo.value = "";
            velVeiculo.focus();

        } else if ( Number(velVeiculo.value) >=  velMais20Porcento ) {
            resultado.innerHTML = `Velocidade do veículo é: ${ Number(velVeiculo.value) }KM/h.
            <br><strong>Multa Grave!<strong> Você ultrapassou o limite da Velocidade em mais de 20%<br>
            Sempre use o sinto de segurança.`
            velVeiculo.value = "";
            velVeiculo.focus();

        }

        
           
    }


}   
