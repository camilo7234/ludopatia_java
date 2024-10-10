// src/controllers/usuarioController.js
const db = require('../database/db_connection');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await db.any('SELECT * FROM usuario');
        res.json(users);
    } catch (err) {
        res.status(500).send('Error al obtener usuarios');
    }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    const { username, email, contrasena, rol } = req.body;
    try {
        await db.none('INSERT INTO usuario (username, email, contrasena, rol) VALUES ($1, $2, $3, $4)', [username, email, contrasena, rol]);
        res.status(201).send('Usuario creado');
    } catch (err) {
        res.status(500).send('Error al crear usuario');
    }
};

// Iniciar sesión
exports.loginUser = async (req, res) => {
    const { email, contrasena } = req.body;
    try {
        const user = await db.oneOrNone('SELECT * FROM usuario WHERE email = $1 AND contrasena = $2', [email, contrasena]);

        if (!user) {
            return res.status(401).send('Credenciales incorrectas');
        }

        const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send('Error al iniciar sesión');
    }
};
