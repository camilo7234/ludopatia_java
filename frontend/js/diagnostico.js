const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario del test
router.get('/test', (req, res) => {
    res.render('test-diagnostico');
});

// Ruta para evaluar el test de diagnóstico
router.post('/evaluarDiagnostico', (req, res) => {
    const respuestas = req.body;
    let puntaje = 0;

    // Contar respuestas "sí"
    for (let i = 1; i <= 5; i++) {
        if (respuestas[`pregunta${i}`] === 'si') {
            puntaje++;
        }
    }

    // Determinar resultado
    let resultado;
    if (puntaje >= 3) {
        resultado = "Es probable que padezcas ludopatía. Se recomienda buscar ayuda profesional.";
    } else {
        resultado = "No parece haber un problema grave de ludopatía, pero mantente alerta.";
    }

    // Enviar resultado a la página de resultados
    res.render('resultadosDiagnostico', { resultado });
});

module.exports = router;