// src/routes/administradorRoutes.js

const express = require('express');
const router = express.Router();
const Administrador = require('../models/administradorModel');

router.post('/', async (req, res) => {
    const { usuario_id } = req.body;
    try {
        const nuevoAdministrador = await Administrador.crearAdministrador({ usuario_id });
        res.status(201).json(nuevoAdministrador);
    } catch (error) {
        console.error('Error al crear administrador:', error);
        res.status(500).json({ error: 'Error al crear el administrador' });
    }
});

router.get('/', async (req, res) => {
    try {
        const administradores = await Administrador.obtenerAdministradores();
        res.status(200).json(administradores);
    } catch (error) {
        console.error('Error al obtener administradores:', error);
        res.status(500).json({ error: 'Error al obtener los administradores' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const administrador = await Administrador.obtenerAdministradorPorId(id);
        res.status(200).json(administrador);
    } catch (error) {
        console.error('Error al obtener administrador por ID:', error);
        res.status(404).json({ error: 'Administrador no encontrado' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { usuario_id } = req.body;
    try {
        const administradorActualizado = await Administrador.actualizarAdministrador(id, { usuario_id });
        res.status(200).json(administradorActualizado);
    } catch (error) {
        console.error('Error al actualizar administrador:', error);
        res.status(500).json({ error: 'Error al actualizar el administrador' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const administradorEliminado = await Administrador.eliminarAdministrador(id);
        res.status(200).json(administradorEliminado);
    } catch (error) {
        console.error('Error al eliminar administrador:', error);
        res.status(500).json({ error: 'Error al eliminar el administrador' });
    }
});

module.exports = router;
