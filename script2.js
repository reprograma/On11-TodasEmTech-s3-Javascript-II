function desconto(){
    var produto1 = prompt("Digite seu produto 1:");
    var precoProduto1 = Number(prompt("digite o valor do produto 1:"));
    var produto2 = prompt("digite seu produto 2:");
    var precoProduto2 = Number(prompt("digite o valor do produto 2:"));

    var compra = precoProduto1+precoProduto2;

    const desconto = 5;

    var valorFinal = (precoProduto1 + precoProduto2) - desconto;

    if(produto1 == produto2 && compra > 5){
        alert("Valor a pagar R$" + valorFinal)}
        else{alert("Campanha para desconto não aplicável. Valor a pagar: R$" + compra)
        }
    

}

desconto()
