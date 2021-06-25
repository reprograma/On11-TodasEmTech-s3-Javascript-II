/*  Exercício 3
*   Ajude o supermercado a calcular o desconto dos produtos.
*   A cada 3 itens comprados, o 4º item sai com 50% de desconto.
*/

function itensComprados() {

    let produto = prompt('Informe o nome do produto')
    let valorProduto = Number(prompt('Informe o valor do produto'))
    
    let calculo = valorProduto * 3
    let promocao = valorProduto / 2
    const valorFinal = calculo + promocao

    alert("Promoção de: " + produto + ". Leve 4 por: R$ " + valorFinal)

}
itensComprados()