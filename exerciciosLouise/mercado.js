function descontão(){
    var valor = Number(prompt("Insira o valor do produto: ")).toFixed(2);
    var quantidade = Number(prompt("Quantas unidades?"));
    var desconto = valor*quantidade.toFixed(2)
    if(quantidade >= 4){
        alert(`Você pagará apenax R$ ${desconto - [valor/2]}!!`)
    }else{
        alert(`Você pagará apenax R$ ${desconto}`)
}
}
descontão()