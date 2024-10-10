// js/api.js

class API {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    // Método para hacer solicitudes GET
    async get(endpoint, token) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    // Método para hacer solicitudes POST
    async post(endpoint, data, token = null) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` })
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    // Método para hacer solicitudes PUT
    async put(endpoint, data, token) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    // Método para hacer solicitudes DELETE
    async delete(endpoint, token) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }
}

const api = new API('http://localhost:7000/api'); // Cambia la URL si es necesario
export default api;
