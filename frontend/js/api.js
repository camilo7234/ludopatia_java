// js/api.js

class API {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    // Método para hacer solicitudes GET
    async get(endpoint, token) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': token ? `Bearer ${token}` : undefined,
                    'Content-Type': 'application/json',
                }
            });

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error en la solicitud GET: ${response.status} ${response.statusText}`);
            }

            return response.json();
        } catch (error) {
            console.error('Error en GET:', error);
            throw error;
        }
    }

    // Método para hacer solicitudes POST
    async post(endpoint, data, token = null) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: JSON.stringify(data)
            });

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error en la solicitud POST: ${response.status} ${response.statusText}`);
            }

            return response.json();
        } catch (error) {
            console.error('Error en POST:', error);
            throw error;
        }
    }

    // Método para hacer solicitudes PUT
    async put(endpoint, data, token) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error en la solicitud PUT: ${response.status} ${response.statusText}`);
            }

            return response.json();
        } catch (error) {
            console.error('Error en PUT:', error);
            throw error;
        }
    }

    // Método para hacer solicitudes DELETE
    async delete(endpoint, token) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error en la solicitud DELETE: ${response.status} ${response.statusText}`);
            }

            return response.json();
        } catch (error) {
            console.error('Error en DELETE:', error);
            throw error;
        }
    }
}

const api = new API('http://localhost:7000/api'); // Cambia la URL si es necesario
export default api;
