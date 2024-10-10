// src/routes/profesionalRoutes.js
const express = require('express');
const router = express.Router();
const profesionalController = require('../controllers/profesionalController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Obtener todos los profesionales (rol admin)
router.get('/', authenticateToken, authorizeRole('admin'), profesionalController.getAllProfessionals);

// Crear, actualizar y eliminar (solo admin)
router.post('/', authenticateToken, authorizeRole('admin'), profesionalController.createProfessional);
router.put('/:id', authenticateToken, authorizeRole('admin'), profesionalController.updateProfessional);
router.delete('/:id', authenticateToken, authorizeRole('admin'), profesionalController.deleteProfessional);

module.exports = router;
