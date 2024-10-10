// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Importar las rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const profesionalRoutes = require('./routes/profesionalRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const citaRoutes = require('./routes/citaRoutes');
const historialClinicoRoutes = require('./routes/historialClinicoRoutes');
const actividadRoutes = require('./routes/actividadRoutes');
const pacienteActividadRoutes = require('./routes/pacienteActividadRoutes');
const diarioPacienteRoutes = require('./routes/diarioPacienteRoutes');
const diagnosticoRoutes = require('./routes/diagnosticoRoutes');

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos
app.use('/css', express.static(path.join(__dirname, 'css')));

// Configurar las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas API
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/profesionales', profesionalRoutes);
app.use('/api/paciente', pacienteRoutes);
app.use('/api/citas', citaRoutes);
app.use('/api/historiales', historialClinicoRoutes);
app.use('/api/actividades', actividadRoutes);
app.use('/api/paciente-actividades', pacienteActividadRoutes);
app.use('/api/diarios', diarioPacienteRoutes);

// Rutas de vistas
app.use('/', diagnosticoRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Middleware para manejar errores globalmente
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { message: 'Algo salió mal. Inténtalo de nuevo más tarde.' });
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Página no encontrada' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 7000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;