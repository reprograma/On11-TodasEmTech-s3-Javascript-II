const txtNumeroInserido = document.querySelector('input#txtNumeroInserido');
const btnCalcular = document.querySelector('input#btnCalcular');
btnCalcular.addEventListener('click', gerarCalculo);
var selMultiplos = document.querySelector('select#selMultiplos');

export default function gerarCalculo(num) {
    num = Number(txtNumeroInserido.value);
    let calculo = 0;

    if( txtNumeroInserido.value == 0 || txtNumeroInserido.value == "" ) {
        alert('[ERRO] Insira um número maior que ZERO!');
        txtNumeroInserido.focus();
    } else {
        selMultiplos.innerHTML = "";
        
        for ( let c = 1; c <= 100; c++ ) {
            calculo = c * num;
            let item = document.createElement('option');
            item.text = `Cálculo número ${c} = ${calculo}`;
            item.value = `Múltiplo${c}`;
            selMultiplos.appendChild(item);
        }
    }

}