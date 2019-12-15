import axios from 'axios'
import types from '@/store/modules/types'
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
        store.dispatch(types.authTypes.actions.LOGOUT);
        router.push({name: 'login'});
    }
    throw err;
});

const auth = {
    login: userData => API.post('/auth/login/', userData),
    logout: () => delete API.defaults.headers.common['Authorization']
};

export default {
    auth
}

