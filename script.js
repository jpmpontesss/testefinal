function enviarMensagem() {
    // Capturando o valor do campo "Nome"
    var nome = document.getElementById("name").value;
  
    // Verificando se o campo está preenchido
    if (nome === "") {
      alert("Por favor, preencha o nome.");
      return;
    }
  
    // Exibindo a mensagem com o nome
    alert("Mensagem enviada com sucesso!\n\nNome: " + nome);
    
    // Opcional: Limpar o campo após o envio
    document.getElementById("name").value = "";
  }
  