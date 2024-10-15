// app.test.js
const request = require('supertest');
const app = require('./src/app'); // Asegúrate de que la ruta a app.js sea correcta

describe('API Tests', () => {
    it('should create a new usuario', async () => {
        const res = await request(app)
            .post('/api/usuarios')
            .send({
                username: 'Test User',
                email: 'testuser@example.com',
                contraseña: 'testpassword',
                rol: 'paciente',
            });
        expect(res.statusCode).toEqual(201); // Verifica que la respuesta sea 201 (creado)
    });

    it('should retrieve all usuarios', async () => {
        const res = await request(app).get('/api/usuarios');
        expect(res.statusCode).toEqual(200); // Verifica que la respuesta sea 200 (OK)
        expect(res.body.length).toBeGreaterThan(0); // Verifica que hay al menos un usuario
    });

    it('should create a new administrador', async () => {
        const res = await request(app)
            .post('/api/administradores')
            .send({
                usuario_id: 1, // Asegúrate de que este usuario ID existe
            });
        expect(res.statusCode).toEqual(201); // Verifica que la respuesta sea 201 (creado)
    });

    it('should create a new profesional', async () => {
        const res = await request(app)
            .post('/api/profesionales')
            .send({
                usuario_id: 2, // Asegúrate de que este usuario ID existe
                especialidad: 'Psiquiatría',
            });
        expect(res.statusCode).toEqual(201); // Verifica que la respuesta sea 201 (creado)
    });

    it('should create a new paciente', async () => {
        const res = await request(app)
            .post('/api/pacientes')
            .send({
                usuario_id: 3, // Asegúrate de que este usuario ID existe
                fecha_diagnostico: '2024-10-01',
                nombre: 'Carlos Ruiz',
            });
        expect(res.statusCode).toEqual(201); // Verifica que la respuesta sea 201 (creado)
    });

    it('should create a new cita', async () => {
        const res = await request(app)
            .post('/api/citas')
            .send({
                paciente_id: 2, // Asegúrate de que este paciente ID existe
                profesional_id: 1, // Asegúrate de que este profesional ID existe
                fecha_hora: '2024-10-15 10:30:00',
                estado: 'Programada',
            });
        expect(res.statusCode).toEqual(201); // Verifica que la respuesta sea 201 (creado)
    });
    
    // Agrega pruebas para diario_paciente y historial_clinico de manera similar

});
