// src/models/historialClinicoModel.js
const db = require('../database/db_connection');

const HistorialClinico = {
    getAll: async () => {
        return await db.any('SELECT * FROM historial_clinico');
    },
    getById: async (id) => {
        return await db.one('SELECT * FROM historial_clinico WHERE id = $1', [id]);
    },
    create: async (historialData) => {
        const { paciente_id, profesional_id, fecha, notas, tratamiento } = historialData;
        return await db.none('INSERT INTO historial_clinico (paciente_id, profesional_id, fecha, notas, tratamiento) VALUES ($1, $2, $3, $4, $5)', [paciente_id, profesional_id, fecha, notas, tratamiento]);
    },
    update: async (id, historialData) => {
        const { paciente_id, profesional_id, fecha, notas, tratamiento } = historialData;
        return await db.none('UPDATE historial_clinico SET paciente_id = $1, profesional_id = $2, fecha = $3, notas = $4, tratamiento = $5 WHERE id = $6', [paciente_id, profesional_id, fecha, notas, tratamiento, id]);
    },
    delete: async (id) => {
        return await db.none('DELETE FROM historial_clinico WHERE id = $1', [id]);
    }
};

module.exports = HistorialClinico;
