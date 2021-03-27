function calcularVelocidadePermitida(){
    var velocidadePermitida = parseInt(prompt("Qual é a velocidade da via?"));
    var velocidadeCondutor = parseInt(prompt("Qual a sua velocidade?"));

    if (velocidadeCondutor <= velocidadePermitida) {
        alert("Sem multa!")
      } else if (velocidadeCondutor <= (velocidadePermitida * 1.1)) {
        alert("Multa leve!")
    } else if (velocidadeCondutor > velocidadePermitida * 1.2) {
        alert("Multa grave!")
    }
   
}
calcularVelocidadePermitida()