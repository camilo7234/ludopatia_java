// src/routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, loginUser } = require('../controllers/usuarioController');
const { validateUser } = require('../middlewares/validationMiddleware');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/roleMiddleware');

// Ruta para obtener todos los usuarios (solo para administradores)
router.get('/', authenticateToken, authorizeRole('admin'), getAllUsers);

// Ruta para crear un usuario con validación
router.post('/register', validateUser, createUser);

// Ruta para iniciar sesión
router.post('/login', loginUser); // Asegúrate de que esta línea esté presente

module.exports = router;
