// src/controllers/citaController.js
const db = require('../database/db_connection');

// Obtener todas las citas
exports.getCitas = async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM cita');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una cita
exports.createCita = async (req, res) => {
    const { paciente_id, profesional_id, fecha_hora, estado } = req.body;
    try {
        await db.none('INSERT INTO cita (paciente_id, profesional_id, fecha_hora, estado) VALUES ($1, $2, $3, $4)', [paciente_id, profesional_id, fecha_hora, estado]);
        res.status(201).json({ message: 'Cita creada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una cita
exports.updateCita = async (req, res) => {
    const { id } = req.params;
    const { paciente_id, profesional_id, fecha_hora, estado } = req.body;
    try {
        await db.none('UPDATE cita SET paciente_id = $1, profesional_id = $2, fecha_hora = $3, estado = $4 WHERE id = $5', [paciente_id, profesional_id, fecha_hora, estado, id]);
        res.status(200).json({ message: 'Cita actualizada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una cita
exports.deleteCita = async (req, res) => {
    const { id } = req.params;
    try {
        await db.none('DELETE FROM cita WHERE id = $1', [id]);
        res.status(200).json({ message: 'Cita eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
