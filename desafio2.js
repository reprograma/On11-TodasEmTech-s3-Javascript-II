//DESAFIO DE REPETIÇAO e FUNCAO

//Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )

var numero = Number(prompt("Digite um número: "));

function multNum(n) {
  
  for(var i = 1; i <= 100; i++){

      let resultado = numero * i;

      document.write("Múltiplo "+ i + " : " + resultado +"<br>");
  } 
}

multNum(numero);


