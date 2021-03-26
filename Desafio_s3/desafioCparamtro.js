 //DESAFIO DE REPETIÇAO e FUNCAO
    
    //Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )-->

function multiple(y){
  for(var i = 1; i<=100; i++){
  let result= y *i ;
  document.write( "<br>" + result + "<br>"+" ");
}
}
multiple(10);
