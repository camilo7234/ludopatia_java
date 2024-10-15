const db = require('./src/database/db_connection');

// Prueba de inserción en la tabla usuario
const nuevoUsuario = {
    username: 'jdoe',
    email: 'jdoe@example.com',
    contrasena: 'password123',
    rol: 'paciente'
};

db.none('INSERT INTO usuario(username, email, contrasena, rol) VALUES($1, $2, $3, $4)', 
    [nuevoUsuario.username, nuevoUsuario.email, nuevoUsuario.contrasena, nuevoUsuario.rol])
    .then(() => {
        console.log('Usuario insertado correctamente');
    })
    .catch(error => {
        console.error('Error al insertar usuario:', error);
    });

// Prueba de inserción en la tabla paciente
const nuevoPaciente = {
    usuario_id: 1, // Reemplazar con el ID del usuario que se inserte primero
    fecha_diagnostico: '2024-10-01'
};

db.none('INSERT INTO paciente(usuario_id, fecha_diagnostico) VALUES($1, $2)', 
    [nuevoPaciente.usuario_id, nuevoPaciente.fecha_diagnostico])
    .then(() => {
        console.log('Paciente insertado correctamente');
    })
    .catch(error => {
        console.error('Error al insertar paciente:', error);
    });

// Prueba de inserción en la tabla administrador
const nuevoAdministrador = {
    usuario_id: 1 // Reemplazar con el ID del usuario que se inserte primero
};

db.none('INSERT INTO administrador(usuario_id) VALUES($1)', 
    [nuevoAdministrador.usuario_id])
    .then(() => {
        console.log('Administrador insertado correctamente');
    })
    .catch(error => {
        console.error('Error al insertar administrador:', error);
    });

// Prueba de inserción en la tabla profesional
const nuevoProfesional = {
    usuario_id: 2, // Reemplazar con el ID del usuario que se inserte primero
    especialidad: 'Psicología'
};

db.none('INSERT INTO profesional(usuario_id, especialidad) VALUES($1, $2)', 
    [nuevoProfesional.usuario_id, nuevoProfesional.especialidad])
    .then(() => {
        console.log('Profesional insertado correctamente');
    })
    .catch(error => {
        console.error('Error al insertar profesional:', error);
    });

// Prueba de inserción en la tabla actividad
const nuevaActividad = {
    nombre: 'Actividad física',
    tipo: 'Ejercicio',
    descripcion: 'Actividad para ayudar con la ansiedad.'
};

db.none('INSERT INTO actividad(nombre, tipo, descripcion) VALUES($1, $2, $3)', 
    [nuevaActividad.nombre, nuevaActividad.tipo, nuevaActividad.descripcion])
    .then(() => {
        console.log('Actividad insertada correctamente');
    })
    .catch(error => {
        console.error('Error al insertar actividad:', error);
    });

// Prueba de inserción en la tabla paciente_actividad
const nuevaPacienteActividad = {
    paciente_id: 1, // Reemplazar con el ID del paciente
    actividad_id: 1, // Reemplazar con el ID de la actividad
    fecha_inicio: '2024-10-10',
    fecha_fin: '2024-10-15'
};

db.none('INSERT INTO paciente_actividad(paciente_id, actividad_id, fecha_inicio, fecha_fin) VALUES($1, $2, $3, $4)', 
    [nuevaPacienteActividad.paciente_id, nuevaPacienteActividad.actividad_id, nuevaPacienteActividad.fecha_inicio, nuevaPacienteActividad.fecha_fin])
    .then(() => {
        console.log('Paciente_Actividad insertado correctamente');
    })
    .catch(error => {
        console.error('Error al insertar paciente_actividad:', error);
    });

// Prueba de inserción en la tabla diario_paciente
const nuevoDiarioPaciente = {
    paciente_id: 1, // Reemplazar con el ID del paciente
    fecha: '2024-10-12',
    contenido: 'Hoy fue un buen día, logré mantener el control.',
    estado_animo: 'Positivo'
};

db.none('INSERT INTO diario_paciente(paciente_id, fecha, contenido, estado_animo) VALUES($1, $2, $3, $4)', 
    [nuevoDiarioPaciente.paciente_id, nuevoDiarioPaciente.fecha, nuevoDiarioPaciente.contenido, nuevoDiarioPaciente.estado_animo])
    .then(() => {
        console.log('Diario insertado correctamente');
    })
    .catch(error => {
        console.error('Error al insertar diario_paciente:', error);
    });

// Prueba de inserción en la tabla historial_clinico
const nuevoHistorialClinico = {
    paciente_id: 1, // Reemplazar con el ID del paciente
    profesional_id: 1, // Reemplazar con el ID del profesional
    fecha: '2024-10-12',
    notas: 'El paciente muestra avances significativos.',
    tratamiento: 'Continuar con las actividades de autocontrol.'
};

db.none('INSERT INTO historial_clinico(paciente_id, profesional_id, fecha, notas, tratamiento) VALUES($1, $2, $3, $4, $5)', 
    [nuevoHistorialClinico.paciente_id, nuevoHistorialClinico.profesional_id, nuevoHistorialClinico.fecha, nuevoHistorialClinico.notas, nuevoHistorialClinico.tratamiento])
    .then(() => {
        console.log('Historial clínico insertado correctamente');
    })
    .catch(error => {
        console.error('Error al insertar historial clínico:', error);
    });

// Prueba de inserción en la tabla cita
const nuevaCita = {
    paciente_id: 1, // Reemplazar con el ID del paciente
    profesional_id: 1, // Reemplazar con el ID del profesional
    fecha_hora: '2024-10-15 10:30:00',
    estado: 'Programada'
};

db.none('INSERT INTO cita(paciente_id, profesional_id, fecha_hora, estado) VALUES($1, $2, $3, $4)', 
    [nuevaCita.paciente_id, nuevaCita.profesional_id, nuevaCita.fecha_hora, nuevaCita.estado])
    .then(() => {
        console.log('Cita insertada correctamente');
    })
    .catch(error => {
        console.error('Error al insertar cita:', error);
    });
