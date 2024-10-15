// src/models/paciente
const db = require('../database/db_connection'); // Asegúrate de que la ruta sea correcta

const Paciente = {
    // Obtener todos los pacientes
    getAll: async () => {
        return await db.any('SELECT * FROM paciente');
    },
    // Obtener un paciente por ID
    getById: async (id) => {
        return await db.one('SELECT * FROM paciente WHERE id = $1', [id]);
    },
    // Crear un nuevo paciente
    create: async (pacienteData) => {
        const { usuario_id, fecha_diagnostico } = pacienteData;
        return await db.none('INSERT INTO paciente (usuario_id, fecha_diagnostico) VALUES ($1, $2)', [usuario_id, fecha_diagnostico]);
    },
    // Actualizar un paciente existente
    update: async (id, pacienteData) => {
        const { usuario_id, fecha_diagnostico } = pacienteData;
        return await db.none('UPDATE paciente SET usuario_id = $1, fecha_diagnostico = $2 WHERE id = $3', [usuario_id, fecha_diagnostico, id]);
    },
    // Eliminar un paciente por ID
    delete: async (id) => {
        return await db.none('DELETE FROM paciente WHERE id = $1', [id]);
    }
};

module.exports = Paciente;

