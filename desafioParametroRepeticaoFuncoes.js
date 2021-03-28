/* DESAFIO DE REPETIÇAO e FUNCAO com parametro

    //Crie um programa que verifique o valor inserido pelo usuário e imprima 
    seus multiplos ( MAX 100 Numeros ) */

let numero = Number(prompt("Digite um número"));

function multiplo(n) {
    let cont = 0;
    if (n <= 100) {
        while (cont <= n) {
            for (var i = 0; i <= n; i++) {
                if ((cont * i) == n) {
                    alert(`${i} é multiplo de ${n}`)
                }
            }
            cont++;
        }
    } else {
        alert("numero maior que 100, tente novamente");
        return multiplo();
    }
}
multiplo(numero);