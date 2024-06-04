
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocalização não é suportada por este navegador.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cidade').value = data.address.city || '';
            document.getElementById('estado').value = data.address.state || '';
            document.getElementById('pais').value = data.address.country || '';
        })
        .catch(error => {
            console.error('Erro ao obter a localização:', error);
            alert('Erro ao obter a localização.');
        });
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Usuário negou a solicitação de geolocalização.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Informações de localização não estão disponíveis.");
            break;
        case error.TIMEOUT:
            alert("A solicitação para obter a localização expirou.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Ocorreu um erro desconhecido.");
            break;
    }
}