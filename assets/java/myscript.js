function enviarFormulario() {
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    // Exibe os dados no console
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);

    // Limpa os campos após o envio
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}