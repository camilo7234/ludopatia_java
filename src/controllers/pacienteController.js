// src/controllers/pacienteController.js
const Paciente = require('../models/pacienteModel'); // Asegúrate de que el modelo Paciente esté definido

// Método para mostrar el formulario de registro
exports.mostrarFormularioRegistro = (req, res) => {
    res.render('formularioRegistro'); // Renderiza el formulario de registro
};

// Método para registrar un paciente
exports.registrarPaciente = async (req, res) => {
    const { nombre, email, contraseña, fecha_diagnostico } = req.body;

    // Lógica para registrar un paciente en la base de datos
    try {
        const nuevoPaciente = new Paciente({ nombre, email, contraseña, fecha_diagnostico });
        await nuevoPaciente.save(); // Guarda el paciente en la base de datos
        res.redirect('/testDiagnostico'); // Redirige al test de diagnóstico
    } catch (error) {
        console.error('Error al registrar el paciente:', error);
        res.status(500).send('Error al registrar el paciente');
    }
};

// Método para obtener todos los pacientes
exports.getAllPatients = async (req, res) => {
    // Lógica para obtener todos los pacientes
    try {
        const pacientes = await Paciente.getAll(); // Obtiene todos los pacientes usando el modelo
        res.json(pacientes); // Envía la lista de pacientes como respuesta
    } catch (error) {
        console.error('Error al obtener la lista de pacientes:', error);
        res.status(500).send('Error al obtener la lista de pacientes');
    }
};

// Método para obtener un paciente por su ID
exports.getPatient = async (req, res) => {
    const patientId = req.params.id;

    // Lógica para obtener un paciente por su ID
    try {
        const paciente = await Paciente.getById(patientId); // Busca el paciente por ID usando el modelo
        if (!paciente) {
            return res.status(404).send('Paciente no encontrado');
        }
        res.json(paciente); // Envía los detalles del paciente
    } catch (error) {
        console.error('Error al obtener el paciente:', error);
        res.status(500).send('Error al obtener el paciente');
    }
};

// Método para crear un nuevo paciente
exports.createPatient = async (req, res) => {
    const { nombre, email, contraseña, fecha_diagnostico } = req.body;

    // Lógica para crear un nuevo paciente
    try {
        const nuevoPaciente = new Paciente({ nombre, email, contraseña, fecha_diagnostico });
        await nuevoPaciente.save(); // Guarda el paciente en la base de datos
        res.status(201).send('Nuevo paciente creado'); // Respuesta de éxito
    } catch (error) {
        console.error('Error al crear un nuevo paciente:', error);
        res.status(500).send('Error al crear un nuevo paciente');
    }
};

// Método para actualizar un paciente
exports.updatePatient = async (req, res) => {
    const patientId = req.params.id;

    // Lógica para actualizar un paciente por su ID
    try {
        const pacienteActualizado = await Paciente.update(patientId, req.body); // Actualiza el paciente usando el modelo
        if (!pacienteActualizado) {
            return res.status(404).send('Paciente no encontrado');
        }
        res.json(pacienteActualizado); // Envía el paciente actualizado
    } catch (error) {
        console.error('Error al actualizar el paciente:', error);
        res.status(500).send('Error al actualizar el paciente');
    }
};

// Método para eliminar un paciente
exports.deletePatient = async (req, res) => {
    const patientId = req.params.id;

    // Lógica para eliminar un paciente por su ID
    try {
        const pacienteEliminado = await Paciente.delete(patientId); // Elimina el paciente usando el modelo
        if (!pacienteEliminado) {
            return res.status(404).send('Paciente no encontrado');
        }
        res.send(`Paciente con ID ${patientId} eliminado`); // Confirma la eliminación
    } catch (error) {
        console.error('Error al eliminar el paciente:', error);
        res.status(500).send('Error al eliminar el paciente');
    }
};
