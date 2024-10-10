// controllers/pacienteController.js
const Paciente = require('../models/Paciente'); // Asegúrate de que el modelo Paciente esté definido

exports.mostrarFormularioRegistro = (req, res) => {
    res.render('formularioRegistro'); // Renderiza el formulario de registro
};

exports.registrarPaciente = async (req, res) => {
    const { nombre, email, contraseña, fecha_diagnostico } = req.body;

    // Lógica para registrar un paciente en la base de datos
    try {
        const nuevoPaciente = new Paciente({ nombre, email, contraseña, fecha_diagnostico });
        await nuevoPaciente.save(); // Guarda el paciente en la base de datos
        res.redirect('/testDiagnostico'); // Redirige al test de diagnóstico
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar el paciente');
    }
};

exports.getAllPatients = async (req, res) => {
    // Lógica para obtener todos los pacientes
    try {
        const pacientes = await Paciente.find(); // Obtiene todos los pacientes
        res.json(pacientes); // Envía la lista de pacientes como respuesta
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la lista de pacientes');
    }
};

exports.getPatient = async (req, res) => {
    const patientId = req.params.id;
    // Lógica para obtener un paciente por su ID
    try {
        const paciente = await Paciente.findById(patientId); // Busca el paciente por ID
        if (!paciente) {
            return res.status(404).send('Paciente no encontrado');
        }
        res.json(paciente); // Envía los detalles del paciente
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el paciente');
    }
};

exports.createPatient = async (req, res) => {
    const { nombre, email, contraseña, fecha_diagnostico } = req.body;

    // Lógica para crear un nuevo paciente
    try {
        const nuevoPaciente = new Paciente({ nombre, email, contraseña, fecha_diagnostico });
        await nuevoPaciente.save(); // Guarda el paciente en la base de datos
        res.status(201).send('Nuevo paciente creado'); // Respuesta de éxito
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear un nuevo paciente');
    }
};

exports.updatePatient = async (req, res) => {
    const patientId = req.params.id;

    // Lógica para actualizar un paciente por su ID
    try {
        const pacienteActualizado = await Paciente.findByIdAndUpdate(patientId, req.body, { new: true });
        if (!pacienteActualizado) {
            return res.status(404).send('Paciente no encontrado');
        }
        res.json(pacienteActualizado); // Envía el paciente actualizado
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el paciente');
    }
};

exports.deletePatient = async (req, res) => {
    const patientId = req.params.id;

    // Lógica para eliminar un paciente por su ID
    try {
        const pacienteEliminado = await Paciente.findByIdAndDelete(patientId); // Elimina el paciente por ID
        if (!pacienteEliminado) {
            return res.status(404).send('Paciente no encontrado');
        }
        res.send(`Paciente con ID ${patientId} eliminado`); // Confirma la eliminación
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el paciente');
    }
};
