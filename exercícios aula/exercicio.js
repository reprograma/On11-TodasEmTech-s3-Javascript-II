//Programa para somar números

/*
alert("Olá, vamos treinar funções!");

var numeroDigitado = Number(prompt("Digite o número certo para prosseguir:"));

function somar() {
 var numeroUm = Number(prompt("Primeiro, digite um número:"));
 var numeroDois = Number(prompt("Agora digite outro número:"));
 var valorTotal = numeroUm + numeroDois
 alert(`A soma entre ${numeroUm} e ${numeroDois} será: ${valorTotal}.`);
}

somar ()

if(numeroDigitado == 2){
 somar()
}
*/

//Programa para subtrair números
/*

var entradaUsuario = Number(prompt("Digite o número certo para prossegir:"));

function subtrair() {
 alert("Vamos treinar subtração?");
 var numero1 = Number(prompt("Digite um número"));
 var numero2 = Number(prompt("Digite outr número:"));
 var valorSubtraido = numero1 - numero2
 alert(`A subtração entre ${numero1} e ${numero2} será: ${valorSubtraido}.`)
}

subtrair()

if(entradaUsuario >= 5){
subtrair()
}
*/


//Programa para mutiplicar números

/*
var numUsuario = Number(prompt("Digite o número certo para prosseguir:"));

function  multiplicar() {
 alert("Vamos treinar multiplicação?");
 var num1 = Number(prompt("Digite seu primeiro número:"));
 var num2 = Number(prompt("Digite outro número:"));
 var resultado = num1 * num2
 alert(`O resultado da multiplicação entre ${num1} e ${num2} será: ${resultado}.`); 
 
}  

multiplicar()

if(numUsuario == 6){
 multiplicar()
}
*/


//Exercicio farmácia JS
/*
function calculoPromo() {
var nomeProduto1 = prompt("Qual o primeiro produto escolhido?");
var precoProduto1 = Number(prompt("Qual o preço dele?"));
var nomeProduto2 = prompt("Qual o nome do segundo produto?");
var precoProduto2 = Number(prompt("Qual o preço do segundo produto que você escolheu?"));
var desconto = 5

if(nomeProduto1 == nomeProduto2){
 var descontoRecebido = precoProduto1 + precoProduto2 - desconto
 alert(`O valor dos produtos com desconto será de R$${descontoRecebido}`);
} else{
 var produtoSemDesconto = precoProduto1 + precoProduto2
 alert(`O valor dos produtos sem desconto será de R$${produtoSemDesconto}`);
}

}

calculoPromo()
*/


// Calcular média do aluno

/*

function mediaAluno () {
 alert("Olá, bem-vinde! Vamos descobrir a média do/a aluno/a?");
 var nomeAluno = prompt("Qual o nome do/a aluno/a?");
 var materia = prompt("Qual a disciplina estudada?");
 var nota1 = Number(prompt("Insira a primeira nota:"));
 var nota2 = Number(prompt("E a segunda nota?")); 
 var media = (nota1 + nota2) / 2

 if(nomeAluno == "" || materia == "" || nota1 == "" || nota2 == ""){
  alert("Por favor, preencha todas as informações.");
  
   return mediaAluno()

 }


  if(media >= 6){
   alert(`Parabéns! A média de ${nomeAluno} foi ${media} e ele/a está aprovado/a em ${materia}!`);
  } else{
   alert(`Não foi dessa vez! ${nomeAluno} foi reprovado.`);
  }
 
}

mediaAluno()

*/

// Calcular desconto supermercado

//Ajude este supermercado a calcular o desconto dos produtos. A cada 3 itens comprados, o 4º item sai com 50% de desconto.

/*

function descontoMercado() {
 var nomeProduto1 = prompt("Qual o produto escolhido?");
 var precoProduto1 = Number(prompt("Informe o seu preço:"));
 var nomeProduto2 = prompt("Digite o segundo produto:");
 var precoProduto2 = Number(prompt("Informe o seu preço:"));
 var nomeProduto3 = prompt("Digite o terceiro produto:");
 var precoProduto3 = Number(prompt("Informe o seu preço"));
 var nomeProduto4 = prompt("Digite o quarto produto:");
 var precoProduto4 = Number(prompt("Informe o seu preço:"));
 var desconto = (precoProduto4 / 2) + precoProduto1 + precoProduto2 + precoProduto3
 
 if (nomeProduto1 && nomeProduto2 && nomeProduto3 && nomeProduto4 ==""){
  alert(`Que pena! Você não está apto/a a participar da nossa promoção. Volte e insira mais um produto.`)

  return descontoMercado()
 } 
 
 else { 
  alert(`Que sorte! Você ganhou 50% de desconto no seu item "${nomeProduto4}" e o valor total de sua compra será: R$${desconto}`)
 }  

} 

descontoMercado()

*/
