let nomeProduto01 = document.querySelector('input#produto01');
let vlProduto01 = document.querySelector('input#vlProduto01');

let nomeProduto02 = document.querySelector('input#produto02');
let vlProduto02 = document.querySelector('input#vlProduto02');

let resultado = document.querySelector('div#res');

const btnSomar = document.querySelector('input#btnVlFinal');
btnSomar.addEventListener('click', calcularPreco);


export default function calcularPreco() {
    let soma = 0;
    soma = Number(vlProduto01.value) + Number(vlProduto02.value)
    
    if (nomeProduto01.value == nomeProduto02.value) {
        soma = Number(vlProduto01.value) + Number(vlProduto02.value) - 5;
        resultado.innerHTML = `Você teve um desconto de R$ 5,00.<br/> Valor Final da compra é: ${soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;

    
    } else {
        soma = Number(vlProduto01.value) + Number(vlProduto02.value);
        resultado.innerHTML = `${soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
    }

    
}


