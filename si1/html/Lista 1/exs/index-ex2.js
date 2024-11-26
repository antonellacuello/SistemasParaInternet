
function validaNome(){
    let texto = document.getElementById("nome").value
    let teste = parseInt(texto)
    let warning = document.getElementById("wnome")
    console.log(teste)
    if (teste > 0 && texto != ""){
        warning.innerHTML = "Apenas letras"
        return false
    }else{
        warning.innerHTML = ""
        return true

    }
}

function validaIdade(){
    let idade = document.getElementById("idade").value
    let number = parseInt(idade)
    let warning = document.getElementById("widade")
    console.log(number)
    if (number > 0 && number <=120){
        warning.innerHTML = ""
        return true
    }else{
        warning.innerHTML = "A idade deve estar entre 0 e 120"
        return false
    }
}

function validaSenha(){
    let senha = document.getElementById("senha").value
    let confirma = document.getElementById("csenha").value
    let warning = document.getElementById("wsenha")
    console.log(senha, csenha)
    if(senha === confirma){
        warning.innerHTML = ""
        return true
    }else{
        warning.innerHTML = "As senhas precisam ser iguais"
        return false
    }
}

function maiscula(){
    let nome = document.getElementById("nome")
    nome.value = nome.value.toUpperCase()
}

function validar(event){

    if(validaNome() == true && validaIdade() == true && validaSenha() == true){
        alert("Enviado com sucesso")
    }
    else{
        event.preventDefault()
        alert("Todos os campos devem estar corretos")
    }
}
