const express = require('express');
const router = express.Router();
const historialClinicoController = require('../controllers/historialClinicoController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Rutas protegidas (solo para profesionales)
router.get('/', authenticateToken, authorizeRole('profesional'), historialClinicoController.getHistorialesClinicos);
router.get('/:id', authenticateToken, authorizeRole('profesional'), historialClinicoController.getHistorialClinicoById);
router.post('/', authenticateToken, authorizeRole('profesional'), historialClinicoController.createHistorialClinico);
router.put('/:id', authenticateToken, authorizeRole('profesional'), historialClinicoController.updateHistorialClinico);
router.delete('/:id', authenticateToken, authorizeRole('admin'), historialClinicoController.deleteHistorialClinico);

module.exports = router;
