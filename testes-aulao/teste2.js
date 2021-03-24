/* EXEMPLO SEM PARÂMETRO
function calcularPromo() {

    var produto1 = prompt('Nome do primeiro produto:')
    var preco1 = Number(prompt('Preço do primeiro produto:'))

    var produto2 = prompt('Nome segundo produto:')
    var preco2 = Number(prompt('Preço segundo produto:'))

    var compra = preco1 + preco2
    const desconto = 5
    
    if (produto1 == produto2 && preco1 == preco2){
        var compraPromo = compra - desconto
        alert('A sua compra, com a promoção vigente, custa R$' + compraPromo)
    
    }else{
        alert('Sua compra não entrou na promoção, logo, sua compra custou R$' + compra)
    }
    
}
calcularPromo()
*/

//EXEMPLO COM PARÂMETRO
function calcularPromo(produto1, produto2){

    var compra = produto1 + produto2

    if(produto1 == produto2){
        alert('A sua compra contém desconto, vai custar' + compra)
    }
}

calcularPromo (8, 8)