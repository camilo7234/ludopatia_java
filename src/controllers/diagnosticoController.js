exports.mostrarTest = (req, res) => {
    res.render('test-diagnostico'); // Asumiendo que tu archivo HTML se llama test-diagnostico.ejs
};

exports.evaluarDiagnostico = (req, res) => {
    const respuestas = req.body;
    let puntaje = 0;

    // Contar las respuestas "sí"
    for (let i = 1; i <= 5; i++) {
        if (respuestas[`pregunta${i}`] === 'si') {
            puntaje++;
        }
    }

    let resultado;
    if (puntaje >= 4) {
        resultado = "Alto riesgo de ludopatía";
    } else if (puntaje >= 2) {
        resultado = "Riesgo moderado de ludopatía";
    } else {
        resultado = "Bajo riesgo de ludopatía";
    }

    // Renderizar una página de resultados o redirigir con el resultado
    res.render('resultado-diagnostico', { resultado });
};