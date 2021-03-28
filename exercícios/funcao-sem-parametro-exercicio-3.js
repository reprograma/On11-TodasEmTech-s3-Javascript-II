function calcularDesconto() {
    produtoSoma = 0
    produtoNome = []
    produtoPreco = []
    for (var i = 1; i <= 4; i++){
        produtoNome.push(prompt("Insira o nome do produto:"))
        produtoPreco.push(+prompt("Insira o valor do produto:"))
        produtoSoma = produtoPreco.reduce(function(a, b) { return a + b})
        console.log(produtoNome, produtoPreco, produtoSoma);
        if (i >= 4) {
            precoTotal = produtoSoma - produtoPreco[3] + (produtoPreco[3] * 0.5) 
            // a cada 3 produtos o quarto sai metade
            console.log("Preço total de R$ ", precoTotal)
            alert("Preço total de R$", precoTotal)
        }
    }
}
calcularDesconto()