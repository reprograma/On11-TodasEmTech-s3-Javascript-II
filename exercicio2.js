let valorUsuario;
valorUsuario = Number(prompt("Insira o valor que deseja exibir os multiplos:"))
let resultado= "Multiplos de " + valorUsuario + ": "
for(var i = 0; i <= 100; i++){
    resultado += (i * valorUsuario) + ", "; 
}
alert(resultado);