//register.js

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        cedula: document.getElementById('cedula').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        email: document.getElementById('email').value,
        contrasena: document.getElementById('contrasena').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/usuarios/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            window.location.href = 'diagnostico.html'; // Redirige al test de diagnóstico
        } else {
            alert('Error en el registro. Intenta nuevamente.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
