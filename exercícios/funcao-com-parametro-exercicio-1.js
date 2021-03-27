function calcularPromo(produtoNome1, produtoPreco1, produtoNome2, produtoPreco2){    
    if (produtoPreco1 == produtoPreco2 || produtoNome1 == produtoNome2){
        console.log(`O valor da compra é de ${((produtoPreco1 + produtoPreco2) -5)} com a promoção.`)
    }
    else {
        console.log(`O valor da compra é de ${produtoPreco1 + produtoPreco2}`)
    }
}
calcularPromo("Shampoo", 20, "Shampoo", 40)