function validarNome(nome) {
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/; 
    if (!regex.test(nome.value)) {
        alert("O nome deve conter apenas letras e espaços.");
        nome.value = "";  
    }
}
function nomeMaiusculo(nome) {
    nome.value = nome.value.toUpperCase();
}
function validarIdade(idade) {
    var idadeV = parseInt(idade.value);
    if (idadeV <= 0  || idadeV > 120) {
        alert("A idade deve ser maior que 0 e menor que 120.");
        idade.value = "";
    }
}
function validarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres.");
        document.getElementById("senha").value = "";
    }
}
function validarConfirmacao() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("cofirmar-senha").value;
    if (senha !== confirmarSenha) {
        alert("As senhas são diferentes.");
        document.getElementById("cofirmar-senha").value = "";
    }
}