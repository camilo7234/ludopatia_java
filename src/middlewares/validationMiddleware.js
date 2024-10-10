// src/middlewares/validationMiddleware.js

const { body, validationResult } = require('express-validator');

// Middleware para validar la creación de usuario
const validateUser = [
  body('username')
    .notEmpty().withMessage('El nombre de usuario es obligatorio')
    .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres'),
  body('email')
    .isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
  body('contrasena')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('cedula')
    .notEmpty().withMessage('La cédula es obligatoria'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateUser };
