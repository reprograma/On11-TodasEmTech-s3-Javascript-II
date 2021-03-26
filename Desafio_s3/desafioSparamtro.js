 //DESAFIO DE REPETIÇAO e FUNCAO SEM PARAMETRO
    
    //Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )-->

    function multiple(){
        mult = (Number(prompt("Escolha um numero: ")));
        for(var i = 1; i<=100; i++){
        result= mult *i ;
        document.write( " "+ "<br>" + result + "<br>");
      }
      }
      multiple();
      