// Función para manejar la navegación
function navigateTo(page) {
    window.location.href = page;
}

// Función para mostrar mensajes al usuario
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
}

// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación de Ludopatía iniciada');
});