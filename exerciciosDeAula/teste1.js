//EXERCICIO: (UTILIZAR PARAMETRO) 
// Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.

let np1 = prompt("Insira o nome do Produto 1:")
let p1 = Number(prompt("Insira o valor do Produto 1:"))
let np2 = prompt("Insira o nome do Produto 2:")
let p2 = Number(prompt("Insira o valor do Produto 2:"))
let soma = p1+p2
function promocao(produto1,preco1,produto2,preco2)
{ if (produto1==produto2 && preco1==preco2)
{ alert(`Promoção Ativada! Valor total de ${soma-5} R$`)
}
else{alert(`Valor total de ${soma} R$`)}
}

promocao(np1,p1,np2,p2)
