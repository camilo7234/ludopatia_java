// src/database/db_connection.js
const pgp = require('pg-promise')();
require('dotenv').config(); // Cargar las variables de entorno

// Configuración de la conexión a la base de datos
const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Exportar la conexión para su uso en otros módulos
module.exports = db;
