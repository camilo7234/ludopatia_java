// src/models/profesionalModel.js
const db = require('../database/db_connection');

const Profesional = {
    getAll: async () => {
        return await db.any('SELECT * FROM profesional');
    },
    getById: async (id) => {
        return await db.one('SELECT * FROM profesional WHERE id = $1', [id]);
    },
    create: async (profesionalData) => {
        const { usuario_id, especialidad } = profesionalData;
        return await db.none('INSERT INTO profesional (usuario_id, especialidad) VALUES ($1, $2)', [usuario_id, especialidad]);
    },
    update: async (id, profesionalData) => {
        const { usuario_id, especialidad } = profesionalData;
        return await db.none('UPDATE profesional SET usuario_id = $1, especialidad = $2 WHERE id = $3', [usuario_id, especialidad, id]);
    },
    delete: async (id) => {
        return await db.none('DELETE FROM profesional WHERE id = $1', [id]);
    }
};

module.exports = Profesional;
