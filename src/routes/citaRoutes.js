const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Rutas protegidas (para pacientes y profesionales)
router.get('/', authenticateToken, authorizeRole('profesional'), citaController.getCitas);
router.post('/', authenticateToken, authorizeRole('paciente'), citaController.createCita);
router.put('/:id', authenticateToken, authorizeRole('profesional'), citaController.updateCita);
router.delete('/:id', authenticateToken, authorizeRole('profesional'), citaController.deleteCita);

module.exports = router;
