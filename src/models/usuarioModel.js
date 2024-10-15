const db = require('../database/db_connection');

const Usuario = {
    getAll: async () => {
        return await db.any('SELECT * FROM usuario');
    },

    getById: async (id) => {
        return await db.one('SELECT * FROM usuario WHERE id = $1', [id]);
    },

    getByEmail: async (email) => {
        return await db.oneOrNone('SELECT * FROM usuario WHERE email = $1', [email]);
    },

    create: async (usuarioData) => {
        const { username, email, contrasena, rol } = usuarioData;
        return await db.one(
            'INSERT INTO usuario (username, email, contrasena, rol) VALUES ($1, $2, $3, $4) RETURNING *',
            [username, email, contrasena, rol]
        );
    },

    update: async (id, usuarioData) => {
        const { username, email, contrasena, rol } = usuarioData;
        return await db.none('UPDATE usuario SET username = $1, email = $2, contrasena = $3, rol = $4 WHERE id = $5', 
            [username, email, contrasena, rol, id]);
    },

    delete: async (id) => {
        return await db.none('DELETE FROM usuario WHERE id = $1', [id]);
    }
};

module.exports = Usuario;