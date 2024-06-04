document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Aqui você pode adicionar mais validações ou enviar o formulário
        alert('Login bem-sucedido!');
    }
});

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 8000); // Troca a imagem a cada 10 segundos

// Inicializa a primeira imagem como ativa
images[currentIndex].classList.add('active');

