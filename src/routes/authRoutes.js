const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Ruta de registro
router.post('/register', authController.register);

// Ruta de login
router.post('/login', authController.login);

// Ruta protegida de ejemplo
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Esta es una ruta protegida', user: req.user });
});

module.exports = router;