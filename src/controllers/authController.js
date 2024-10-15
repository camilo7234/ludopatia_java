const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');

const authController = {
    register: async (req, res) => {
        try {
            const { username, email, password, rol } = req.body;
            
            // Verificar si el usuario ya existe
            const existingUser = await Usuario.getByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: 'El usuario ya existe' });
            }

            // Encriptar la contraseña
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Crear el nuevo usuario
            const newUser = await Usuario.create({
                username,
                email,
                contrasena: hashedPassword,
                rol
            });

            res.status(201).json({ message: 'Usuario registrado exitosamente', userId: newUser.id });
        } catch (error) {
            console.error('Error en el registro:', error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Verificar si el usuario existe
            const user = await Usuario.getByEmail(email);
            if (!user) {
                return res.status(400).json({ message: 'Credenciales inválidas' });
            }

            // Verificar la contraseña
            const validPassword = await bcrypt.compare(password, user.contrasena);
            if (!validPassword) {
                return res.status(400).json({ message: 'Credenciales inválidas' });
            }

            // Generar token JWT
            const token = jwt.sign(
                { id: user.id, rol: user.rol },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.json({ token, userId: user.id, rol: user.rol });
        } catch (error) {
            console.error('Error en el login:', error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
};

module.exports = authController;