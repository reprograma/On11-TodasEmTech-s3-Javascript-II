function calculoRadar(){
    let velocidadeCondutor = Number(prompt("Velocidade do condutor:"))
    let velocidadePermitida = Number(prompt("Velocidade permitida na via:"))
    if (velocidadeCondutor <= velocidadePermitida) {
        alert("Sem multa!")
      } else if (velocidadeCondutor <= (velocidadePermitida * 1.1)) {
        alert("Multa leve!")
    } else if (velocidadeCondutor > velocidadePermitida * 1.2) {
        alert("Multa grave!")
    }
}
calculoRadar()