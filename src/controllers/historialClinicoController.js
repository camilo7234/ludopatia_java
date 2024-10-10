const db = require('../database/db_connection');

// Obtener todos los historiales clínicos
exports.getHistorialesClinicos = async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM historial_clinico');
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un historial clínico por ID
exports.getHistorialClinicoById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.one('SELECT * FROM historial_clinico WHERE id = $1', id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo historial clínico
exports.createHistorialClinico = async (req, res) => {
    try {
        const { paciente_id, fecha, notas } = req.body;
        const result = await db.one(
            'INSERT INTO historial_clinico (paciente_id, fecha, notas) VALUES ($1, $2, $3) RETURNING *',
            [paciente_id, fecha, notas]
        );
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un historial clínico
exports.updateHistorialClinico = async (req, res) => {
    try {
        const { id } = req.params;
        const { paciente_id, fecha, notas } = req.body;
        const result = await db.one(
            'UPDATE historial_clinico SET paciente_id = $1, fecha = $2, notas = $3 WHERE id = $4 RETURNING *',
            [paciente_id, fecha, notas, id]
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un historial clínico
exports.deleteHistorialClinico = async (req, res) => {
    try {
        const { id } = req.params;
        await db.none('DELETE FROM historial_clinico WHERE id = $1', id);
        res.json({ message: 'Historial clínico eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};