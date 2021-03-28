function calcularPromo(){
    let produtoNome1 = prompt("Insira o nome do primeiro produto")
    let produtoPreco1 = Number(prompt("Insira o valor do primeiro produto"))
    
    let produtoNome2 = prompt("Insira o nome do segundo produto")
    let produtoPreco2 = Number(prompt("Insira o valor do segundo produto"))
    
    const desconto = 5

    if (produtoPreco1 == produtoPreco2 && produtoNome1 == produtoNome2){
        alert(`O valor da compra é de R$ ${(produtoPreco1 + produtoPreco2) - desconto} com a promoção.`)
    }
    else {
        alert(`O valor da compra é de R$ ${produtoPreco1 + produtoPreco2}.`)
    }
}
calcularPromo()