import {Types as authTypes} from "./types";
import axios from 'axios';

const state = {
  token: localStorage.getItem('token') || '',
};

const getters = {
  [authTypes.getters.IS_AUTENTICATED]: state => !!state.token
};

const actions = {
  [authTypes.actions.LOGIN]: async ({commit}, user) => {
    try {
      const response = await this.$http({url: '/auth/login', data: user, method: 'POST'});
      const token = response.data.token;
      localStorage.setItem('token', token); // store the token in localstorage
      axios.defaults.headers.common['Authorization'] = token;
      commit(authTypes.actions.SUCCESS, token)
    } catch (e) {
      localStorage.removeItem('token');
    }
  },
  [authTypes.actions.LOGOUT]: () => {
    localStorage.removeItem('token'); // clear your user's token from localstorage
    delete axios.defaults.headers.common['Authorization']
  }
};

const mutations = {
  [authTypes.actions.LOGIN]: (state, token) => {
    state.token = token
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
