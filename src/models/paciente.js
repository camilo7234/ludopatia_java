// src/models/pacienteModel.js
const db = require('../database/db_connection');

const Paciente = {
    getAll: async () => {
        return await db.any('SELECT * FROM paciente');
    },
    getById: async (id) => {
        return await db.one('SELECT * FROM paciente WHERE id = $1', [id]);
    },
    create: async (pacienteData) => {
        const { usuario_id, fecha_diagnostico } = pacienteData;
        return await db.none('INSERT INTO paciente (usuario_id, fecha_diagnostico) VALUES ($1, $2)', [usuario_id, fecha_diagnostico]);
    },
    update: async (id, pacienteData) => {
        const { usuario_id, fecha_diagnostico } = pacienteData;
        return await db.none('UPDATE paciente SET usuario_id = $1, fecha_diagnostico = $2 WHERE id = $3', [usuario_id, fecha_diagnostico, id]);
    },
    delete: async (id) => {
        return await db.none('DELETE FROM paciente WHERE id = $1', [id]);
    }
};

module.exports = Paciente;
