//Crie um programa que verifique o valor inserido pelo usuário e imprima seus multiplos ( MAX 100 Numeros )
//function (múltiplo de número) sem parâmetro

let num = Number(prompt("Digite um valor:"))

i=1

while (i<=100){

    document.write(" "+num*i)
    i=i+1
}