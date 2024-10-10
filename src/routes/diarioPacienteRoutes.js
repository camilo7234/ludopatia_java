const express = require('express');
const router = express.Router();
const diarioPacienteController = require('../controllers/diarioPacienteController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Rutas protegidas
router.get('/', authenticateToken, authorizeRole('paciente'), diarioPacienteController.getDiarioPacientes);
router.post('/', authenticateToken, authorizeRole('paciente'), diarioPacienteController.createDiarioPaciente);
router.put('/:id', authenticateToken, authorizeRole('paciente'), diarioPacienteController.updateDiarioPaciente);
router.delete('/:id', authenticateToken, authorizeRole('paciente'), diarioPacienteController.deleteDiarioPaciente);

module.exports = router;
