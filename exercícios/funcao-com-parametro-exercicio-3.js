function calcularDesconto(produtoPreco1, produtoPreco2, produtoPreco3, produtoPreco4) {
    for (var i = 1; i <= 4; i++){
        produtoSoma = produtoPreco1 + produtoPreco2 + produtoPreco3 + produtoPreco4
        if (i = 4) {
            precoTotal = produtoSoma - (produtoPreco4 / 2) 
            // a cada 3 produtos o quarto sai metade
            alert(`Preço total de R$ ${precoTotal}`)
            console.log(`Preço total de R$ ${precoTotal}`)
        }
    }
}
calcularDesconto(15,5,10,35)