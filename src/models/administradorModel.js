const db = require('../database/db_connection');

const Administrador = {
    crearAdministrador: async ({ usuario_id }) => {
        const query = `
            INSERT INTO administrador (usuario_id)
            VALUES ($1)
            RETURNING *;
        `;
        const values = [usuario_id];

        try {
            const result = await db.one(query, values);
            return result;
        } catch (error) {
            console.error('Error al crear administrador:', error);
            throw error;
        }
    },

    // Otros métodos que puedas necesitar, por ejemplo:
    getAdministradorById: async (id) => {
        return await db.oneOrNone('SELECT * FROM administrador WHERE id = $1', [id]);
    },

    getAllAdministradores: async () => {
        return await db.any('SELECT * FROM administrador');
    }
};

module.exports = Administrador;