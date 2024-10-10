// src/models/actividadModel.js
const db = require('../database/db_connection');

const Actividad = {
    getAll: async () => {
        return await db.any('SELECT * FROM actividad');
    },
    getById: async (id) => {
        return await db.one('SELECT * FROM actividad WHERE id = $1', [id]);
    },
    create: async (actividadData) => {
        const { nombre, tipo, descripcion } = actividadData;
        return await db.none('INSERT INTO actividad (nombre, tipo, descripcion) VALUES ($1, $2, $3)', [nombre, tipo, descripcion]);
    },
    update: async (id, actividadData) => {
        const { nombre, tipo, descripcion } = actividadData;
        return await db.none('UPDATE actividad SET nombre = $1, tipo = $2, descripcion = $3 WHERE id = $4', [nombre, tipo, descripcion, id]);
    },
    delete: async (id) => {
        return await db.none('DELETE FROM actividad WHERE id = $1', [id]);
    }
};

module.exports = Actividad;
