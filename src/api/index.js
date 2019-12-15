import axios from 'axios'
import store from '../store'
import router from "@/router";

const API = axios.create({
    baseURL: 'http://localhost:8000/api',
});

API.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
            config.headers['Content-Type'] = 'application/json';
        }

        return config;
    },
    error => {
        Promise.reject(error)
    }
);

API.interceptors.response.use(response => {
    return response;
}, (err) => {
    if (err.response.status === 401) {
        // if you ever get an unauthorized, logout the user
        store.dispatch('logout');
        router.push({name: 'login'});
    }
    throw err;
});

const auth = {
    login: userData => API.post('/auth/login/', userData),
    logout: () => delete API.defaults.headers.common['Authorization']
};

const cliente = {
    getAll: () => API.get('/empresa/clientes/'),
    get: id => API.get(`/empresa/clientes/${id}/`),
    create: data => API.post('/empresa/clientes/', data),
    update: (id, data) => API.put('/empresa/clientes/${id}/', data)
};

export default {
    auth,
    cliente
}

