// src/controllers/actividadController.js
const db = require('../database/db_connection');

// Obtener todas las actividades
exports.getActividades = async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM actividad');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear actividad
exports.createActividad = async (req, res) => {
    const { nombre, tipo, descripcion } = req.body;
    try {
        await db.none('INSERT INTO actividad (nombre, tipo, descripcion) VALUES ($1, $2, $3)', [nombre, tipo, descripcion]);
        res.status(201).json({ message: 'Actividad creada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar actividad
exports.updateActividad = async (req, res) => {
    const { id } = req.params;
    const { nombre, tipo, descripcion } = req.body;
    try {
        await db.none('UPDATE actividad SET nombre = $1, tipo = $2, descripcion = $3 WHERE id = $4', [nombre, tipo, descripcion, id]);
        res.status(200).json({ message: 'Actividad actualizada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar actividad
exports.deleteActividad = async (req, res) => {
    const { id } = req.params;
    try {
        await db.none('DELETE FROM actividad WHERE id = $1', [id]);
        res.status(200).json({ message: 'Actividad eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
