try {
    const db = require('../database/db_connection');
    console.log('Módulo importado con éxito.');
} catch (error) {
    console.error('Error al importar el módulo:', error);
}
