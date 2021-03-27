function multiploNumero() {
    let valorNumero = +prompt("Insira um número para achar 100 múltiplos dele:")
    for (i = valorNumero; i <= 100 * valorNumero; i++) {
        if (i % valorNumero == 0){
            alert(i)
        }
    }
}
multiploNumero()