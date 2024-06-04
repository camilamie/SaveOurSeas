function redirectToAnotherPage(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Abre uma nova guia com a URL especificada
    var newWindow = window.open("index.html", "_blank"); // MUDAR ESTE URL PARA O PAGES DO INDEX 

    // Fecha a guia atual se a nova guia for aberta com sucesso
    if (newWindow) {
        window.close();
    } else {
        alert("Não foi possível abrir a nova guia. Por favor, permita pop-ups para este site.");
    }
}

// Adiciona um listener ao formulário para chamar a função de redirecionamento ao enviar
document.getElementById('loginForm').addEventListener('submit', redirectToAnotherPage);
