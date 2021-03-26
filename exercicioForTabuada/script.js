let txtNumero = document.querySelector('input#txtNumero');
let btnGerar = document.querySelector('input#btnGerar');
btnGerar.addEventListener('click', gerarTabuada);


export default function gerarTabuada() {
    
    let tab = document.querySelector('select#seltab');
    
    if (txtNumero.value.length == 0) {
        alert('Digite um número!');

    } else {
        tab.innerHTML = '';
        let n = Number(txtNumero.value);
        let c = 1;
        for (c; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    }
}