// src/middlewares/roleMiddleware.js

// Middleware para verificar el rol del usuario
const authorizeRole = (role) => {
    return (req, res, next) => {
      if (req.user.rol !== role) {
        return res.status(403).json({ message: 'Acceso denegado: rol no autorizado' });
      }
      next();
    };
  };
  
  module.exports = { authorizeRole };
  