/*  Exercício 1:
*   Farmácia JS está em promoção.
*   A cada 2 produtos iguais comprados, receba 5 reais de desconto.
*   Escreva um programa para auxiliar a farmácia a calcular o valor final do produto.
*/

let produto1 = prompt('Informe o nome do produto 1')
let valorProduto1 = Number(prompt('Informe o valor do produto 1: R$'))

let produto2 = prompt('Informe o nome do produto 2')
let valorProduto2 = Number(prompt('Informe o valor do produto 2: R$'))

funcPromocao(produto1, produto2, valorProduto1, valorProduto2)

function funcPromocao(prod1, prod2, valorProd1, valorProd2) {
    
    var totalCompras = valorProd1 + valorProd2

    if (prod1 == prod2 && valorProd1 == valorProd2) {
        const valorComprasDesconto = totalCompras - 5
        return alert("O valor total a pagar (com desconto) é R$ " + valorComprasDesconto)
    } else {
        return alert("O valor total a pagar é R$ " + totalCompras)
    }    
}