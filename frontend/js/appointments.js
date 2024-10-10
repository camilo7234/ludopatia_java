document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login.html';
    }

    const response = await fetch('http://localhost:3000/api/citas', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    if (response.ok) {
        const appointments = await response.json();
        const appointmentList = document.getElementById('appointment-list');
        appointments.forEach(cita => {
            const li = document.createElement('li');
            li.innerText = `Cita con ${cita.profesional} en ${cita.fecha_hora}`;
            appointmentList.appendChild(li);
        });
    } else {
        alert('Error al cargar citas');
    }
});

