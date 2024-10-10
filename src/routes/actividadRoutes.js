const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividadController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Rutas protegidas (solo para profesionales)
router.get('/', authenticateToken, authorizeRole('profesional'), actividadController.getActividades);
router.post('/', authenticateToken, authorizeRole('admin'), actividadController.createActividad);
router.put('/:id', authenticateToken, authorizeRole('admin'), actividadController.updateActividad);
router.delete('/:id', authenticateToken, authorizeRole('admin'), actividadController.deleteActividad);

module.exports = router;
