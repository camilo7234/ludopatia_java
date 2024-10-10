const socket = new WebSocket('ws://localhost:3000/chat');

socket.addEventListener('open', () => {
    console.log('Conexión establecida con el servidor de chat');
});

socket.addEventListener('message', (event) => {
    const messages = document.getElementById('chat-messages');
    const message = document.createElement('div');
    message.innerText = event.data;
    messages.appendChild(message);
});

document.getElementById('chat-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('message').value;
    socket.send(message);
    document.getElementById('message').value = '';
});
