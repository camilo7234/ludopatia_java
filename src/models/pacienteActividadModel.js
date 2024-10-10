// src/models/pacienteActividadModel.js
const db = require('../database/db_connection');

const PacienteActividad = {
    getAll: async () => {
        return await db.any('SELECT * FROM paciente_actividad');
    },
    getById: async (id) => {
        return await db.one('SELECT * FROM paciente_actividad WHERE id = $1', [id]);
    },
    create: async (pacienteActividadData) => {
        const { paciente_id, actividad_id, fecha_inicio, fecha_fin, estado } = pacienteActividadData;
        return await db.none('INSERT INTO paciente_actividad (paciente_id, actividad_id, fecha_inicio, fecha_fin, estado) VALUES ($1, $2, $3, $4, $5)', [paciente_id, actividad_id, fecha_inicio, fecha_fin, estado]);
    },
    update: async (id, pacienteActividadData) => {
        const { paciente_id, actividad_id, fecha_inicio, fecha_fin, estado } = pacienteActividadData;
        return await db.none('UPDATE paciente_actividad SET paciente_id = $1, actividad_id = $2, fecha_inicio = $3, fecha_fin = $4, estado = $5 WHERE id = $6', [paciente_id, actividad_id, fecha_inicio, fecha_fin, estado, id]);
    },
    delete: async (id) => {
        return await db.none('DELETE FROM paciente_actividad WHERE id = $1', [id]);
    }
};

module.exports = PacienteActividad;
