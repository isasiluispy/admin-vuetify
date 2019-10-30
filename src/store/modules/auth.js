import {AUTH_IS_AUTHENTICATED, AUTH_LOGOUT, AUTH_REQUEST, AUTH_STATUS, AUTH_SUCCESS} from "../types/auth";
import axios from 'axios';

const state = {
  token: localStorage.getItem('token') || '',
};

const getters = {
  [AUTH_IS_AUTHENTICATED]: state => !!state.token,
  [AUTH_STATUS]: state => state.status,
};

const actions = {
  [AUTH_REQUEST]: async ({commit}, user) => {
    try {

      const response = await this.$http({url: '/auth/login', data: user, method: 'POST'});
      const token = response.data.token;
      localStorage.setItem('token', token); // store the token in localstorage
      axios.defaults.headers.common['Authorization'] = token;
      commit(AUTH_SUCCESS, token)
    } catch (e) {
      localStorage.removeItem('token');
    }
  },
  [AUTH_LOGOUT]: () => {
    localStorage.removeItem('token'); // clear your user's token from localstorage
    delete axios.defaults.headers.common['Authorization']
  }
};

const mutations = {
  [AUTH_SUCCESS]: (state, token) => {
    state.token = token
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
