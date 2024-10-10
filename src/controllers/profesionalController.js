// src/controllers/profesionalController.js
const db = require('../database/db_connection');

// Obtener todos los profesionales
exports.getAllProfessionals = async (req, res) => {
    try {
        const professionals = await db.any('SELECT * FROM profesional');
        res.json(professionals);
    } catch (err) {
        res.status(500).send('Error al obtener profesionales');
    }
};

// Crear un nuevo profesional
exports.createProfessional = async (req, res) => {
    const { usuario_id, especialidad } = req.body;
    try {
        await db.none('INSERT INTO profesional (usuario_id, especialidad) VALUES ($1, $2)', [usuario_id, especialidad]);
        res.status(201).send('Profesional creado');
    } catch (err) {
        res.status(500).send('Error al crear profesional');
    }
};

// Actualizar un profesional
exports.updateProfessional = async (req, res) => {
    const { id } = req.params;
    const { usuario_id, especialidad } = req.body;
    try {
        await db.none('UPDATE profesional SET usuario_id = $1, especialidad = $2 WHERE id = $3', [usuario_id, especialidad, id]);
        res.status(200).send('Profesional actualizado');
    } catch (err) {
        res.status(500).send('Error al actualizar profesional');
    }
};

// Eliminar un profesional
exports.deleteProfessional = async (req, res) => {
    const { id } = req.params;
    try {
        await db.none('DELETE FROM profesional WHERE id = $1', [id]);
        res.status(200).send('Profesional eliminado');
    } catch (err) {
        res.status(500).send('Error al eliminar profesional');
    }
};
