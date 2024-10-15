// db_test.js
const pgp = require('pg-promise')();
require('dotenv').config(); // Para leer las variables de entorno desde el archivo .env

// Conexión a la base de datos
const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Prueba de conexión
db.connect()
    .then(obj => {
        console.log('Conexión exitosa a la base de datos');
        obj.done(); // Cierra la conexión
    })
    .catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
