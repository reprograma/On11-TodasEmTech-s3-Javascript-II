function valorDesconto(){
var produtoUm = prompt("Escreva o nome do produto comprado: ");
var valorUm = Number(prompt("Valor do produto: "));
var produtoDois = prompt("Escreva o nome do segundo produto a ser comprado: ");
var valorDois = Number(prompt("Valor do segundo produto: "));
var calculo = (valorUm + valorDois - 5).toFixed(2);
var calculoDois = (valorUm + valorDois).toFixed(2);
    if(produtoUm == produtoDois){
        alert(`Você pagará R$ ${calculo}`)
    }else if(produtoUm != produtoDois){
        alert(`Você pagará R$ ${calculoDois}`)
    }else{
        return valorDesconto;
}
}
valorDesconto()