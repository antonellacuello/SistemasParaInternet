function executar(){
    let valor1 = parseInt(document.getElementById("v1").value)
    let valor2 = parseInt(document.getElementById("v2").value)
    let texto = document.getElementById("texto")
    if (valor1 < valor2){
        texto.innerHTML = ""
        for (i = valor1; i<=valor2; i++){
            texto.innerHTML += i + " "
        }
    }else{
        alert("o valor 2 precisa ser maior que o valor 1")
    }
}