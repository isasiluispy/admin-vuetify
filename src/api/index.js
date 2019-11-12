import axios from 'axios'
import {Types as authTypes} from "../store/modules/auth/types";
import store from '../store'

const API = axios.create({
  baseURL: 'http://localhost:8000/api'
});

const auth = {
  login: userData => API.post('/auth/login/', userData),
  logout: () => delete API.defaults.headers.common['Authorization'],
  intercept: () => {
    API.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          store.dispatch(authTypes.actions.LOGOUT);
          // you can also redirect to /login if needed !
        }
        throw err;
      });
    });
  },
  setToken: token => API.defaults.headers.common['Authorization'] = token
};

export default {
  auth
}

