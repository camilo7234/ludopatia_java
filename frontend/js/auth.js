// js/auth.js
import api from './api.js';

class Auth {
    constructor() {
        this.token = localStorage.getItem('token');
    }

    async login(email, contrasena) {
        const data = await api.post('/usuarios/login', { email, contrasena });
        if (data.token) {
            this.token = data.token;
            localStorage.setItem('token', this.token);
        }
        return data;
    }

    logout() {
        this.token = null;
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        return !!this.token;
    }

    getToken() {
        return this.token;
    }
}

const auth = new Auth();
export default auth;
