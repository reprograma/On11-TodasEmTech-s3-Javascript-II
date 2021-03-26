function multiplicadores(){
var numero = Number(prompt("Insira um numero, para obter multiplicadores: "));
while(numero == ""){
    return multiplicadores()
}
for(var i = 1; i <= 100; i++ ){
    if(numero % i ===0)
    alert(`É multiplo de ${i}`)
}
return multiplicadores()
}
multiplicadores()