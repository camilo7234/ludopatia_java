// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parseo JSON para las solicitudes
app.use(bodyParser.urlencoded({ extended: true })); // Parseo URL-encoded para formularios
app.use(express.json()); // Middleware para manejar JSON

// Servir archivos estáticos (CSS, JS, etc.)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js'))); // Agregado para servir archivos JS
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // Agregado para servir assets

// Configuración de vistas (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
const administradorRoutes = require('./routes/administradorRoutes');
const authRoutes = require('./routes/authRoutes'); // Añadir las rutas de autenticación

// Rutas API
app.use('/api/auth', authRoutes); // Usar las rutas de autenticación
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/profesionales', profesionalRoutes);
app.use('/api/pacientes', pacienteRoutes); // Asegúrate de que sea plural
app.use('/api/citas', citaRoutes);
app.use('/api/historiales', historialClinicoRoutes);
app.use('/api/actividades', actividadRoutes);
app.use('/api/paciente-actividades', pacienteActividadRoutes);
app.use('/api/diarios', diarioPacienteRoutes);
app.use('/api/administradores', administradorRoutes);

// Rutas de vistas (página principal y diagnóstico)
app.use('/', diagnosticoRoutes);

// Ruta principal para el index
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista principal (index.ejs)
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack); // Imprimir el error en consola
    res.status(500).render('error', { message: 'Algo salió mal. Inténtalo de nuevo más tarde.' }); // Renderizar vista de error
});

// Manejo de rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Página no encontrada' }); // Renderizar vista de 404
});

// Iniciar el servidor
const PORT = process.env.PORT || 7000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Exportar el app para pruebas o uso externo
module.exports = app;
