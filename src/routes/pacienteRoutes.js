// src/routes/pacienteRoutes.js

const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Ruta pública para mostrar el formulario de registro
router.get('/registro', (req, res) => {
    pacienteController.mostrarFormularioRegistro(req, res);
});

// Ruta para mostrar el test de diagnóstico
router.get('/testDiagnostico', (req, res) => {
    res.render('testDiagnostico'); // Asegúrate de que el archivo sea correcto
});

// Ruta pública para procesar el registro de pacientes
router.post('/registro', (req, res) => {
    pacienteController.registrarPaciente(req, res);
});

// Rutas protegidas existentes
router.get('/', authenticateToken, authorizeRole('admin'), (req, res) => {
    pacienteController.getAllPatients(req, res);
});

router.get('/:id', authenticateToken, authorizeRole('admin'), (req, res) => {
    pacienteController.getPatient(req, res);
});

router.post('/', authenticateToken, authorizeRole('admin'), (req, res) => {
    pacienteController.createPatient(req, res);
});

router.put('/:id', authenticateToken, authorizeRole('admin'), (req, res) => {
    pacienteController.updatePatient(req, res);
});

router.delete('/:id', authenticateToken, authorizeRole('admin'), (req, res) => {
    pacienteController.deletePatient(req, res);
});

module.exports = router;
