// Crie um programa que está o valor inserido pelo usuário e imprima seus multiplos (MAX 100 Numeros)
var valor = Number (prompt ("Insira um valor"));
function multiplicarNum(){

 for (var i = 1; i <= 100; i++){
    let resultado = valor * i;
document.write("multiplo" + i + ": " + resultado + "<br>");

}
}
multiplicarNum(valor);
