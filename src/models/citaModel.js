// src/models/citaModel.js
const db = require('../database/db_connection');

const Cita = {
    getAll: async () => {
        return await db.any('SELECT * FROM cita');
    },
    getById: async (id) => {
        return await db.one('SELECT * FROM cita WHERE id = $1', [id]);
    },
    create: async (citaData) => {
        const { paciente_id, profesional_id, fecha_hora, estado } = citaData;
        return await db.none('INSERT INTO cita (paciente_id, profesional_id, fecha_hora, estado) VALUES ($1, $2, $3, $4)', [paciente_id, profesional_id, fecha_hora, estado]);
    },
    update: async (id, citaData) => {
        const { paciente_id, profesional_id, fecha_hora, estado } = citaData;
        return await db.none('UPDATE cita SET paciente_id = $1, profesional_id = $2, fecha_hora = $3, estado = $4 WHERE id = $5', [paciente_id, profesional_id, fecha_hora, estado, id]);
    },
    delete: async (id) => {
        return await db.none('DELETE FROM cita WHERE id = $1', [id]);
    }
};

module.exports = Cita;
