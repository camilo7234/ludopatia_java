// testLogin.js
const fetch = require('node-fetch');

async function testLogin() {
    const email = 'camilorubio723@gmail.com'; // Cambia esto por el correo del usuario en la base de datos
    const contrasena = '315215'; // Cambia esto por la contraseña del usuario en la base de datos

    try {
        const response = await fetch('http://localhost:3000/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, contrasena }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error al iniciar sesión: ${errorText}`);
            return;
        }

        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data);
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

testLogin();
