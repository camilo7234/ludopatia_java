// src/models/diarioPacienteModel.js
const db = require('../database/db_connection');

const DiarioPaciente = {
    getAll: async () => {
        return await db.any('SELECT * FROM diario_paciente');
    },
    getById: async (id) => {
        return await db.one('SELECT * FROM diario_paciente WHERE id = $1', [id]);
    },
    create: async (diarioData) => {
        const { paciente_id, fecha, contenido, estado_animo } = diarioData;
        return await db.none('INSERT INTO diario_paciente (paciente_id, fecha, contenido, estado_animo) VALUES ($1, $2, $3, $4)', [paciente_id, fecha, contenido, estado_animo]);
    },
    update: async (id, diarioData) => {
        const { paciente_id, fecha, contenido, estado_animo } = diarioData;
        return await db.none('UPDATE diario_paciente SET paciente_id = $1, fecha = $2, contenido = $3, estado_animo = $4 WHERE id = $5', [paciente_id, fecha, contenido, estado_animo, id]);
    },
    delete: async (id) => {
        return await db.none('DELETE FROM diario_paciente WHERE id = $1', [id]);
    }
};

module.exports = DiarioPaciente;
