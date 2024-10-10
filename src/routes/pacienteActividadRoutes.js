const express = require('express');
const router = express.Router();
const pacienteActividadController = require('../controllers/pacienteActividadController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Obtener todas las actividades de pacientes (solo admin o profesional)
router.get('/', authenticateToken, authorizeRole('profesional'), pacienteActividadController.getPacienteActividades);

// Crear, actualizar y eliminar actividades (solo admin)
router.post('/', authenticateToken, authorizeRole('admin'), pacienteActividadController.createPacienteActividad);
router.put('/:id', authenticateToken, authorizeRole('admin'), pacienteActividadController.updatePacienteActividad);
router.delete('/:id', authenticateToken, authorizeRole('admin'), pacienteActividadController.deletePacienteActividad);

module.exports = router;
