//DESAFIO DE REPETIÇAO e FUNCAO
//Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )

//LEMBRAR DE COLOCAR O RETURN

var valor = Number(prompt("Digite um numero:"));


function multiplos (valor){
    let mult = 0;
    if(valor == "" ){
        alert("Digite um número:");
        return multiplos(valor);
    }
    for(var i = 1; i <= 100; i++){
        mult += valor;
        alert(mult);
    }

}
multiplos(valor);



