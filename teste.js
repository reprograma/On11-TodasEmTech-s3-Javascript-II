var produto1 = prompt("Nome do produto 1: ");
var preco1 = Number(prompt("Valor do produto: "));

var produto2 = prompt("Nome do produto 2: ");
var preco2 = Number(prompt("Valor do produto: "));

function calcularPromo(){
total = preco1+preco2;


if (produto1 == produto2 && preco1 == preco2 && total>5 )  {
    alert("Valor total da compra é: " + `${total-5}`);
    } else {
         alert("Valor total da compra é: " + `${total}`);
        }

}

calcularPromo();