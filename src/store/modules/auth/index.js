import {Types as authTypes} from "./types";
import api from "../../../api";

const state = {
  token: localStorage.getItem('token') || '',
};

const getters = {
  [authTypes.getters.IS_AUTENTICATED]: state => !!state.token
};

const actions = {
  [authTypes.actions.LOGIN]: async ({commit}, userData) => {
    try {
      const response = await api.auth.login(userData);
      const token = response.data.key;
      localStorage.setItem('token', token); // store the token in localstorage
      api.auth.setToken(token);
      commit(authTypes.actions.LOGIN, token)
    } catch (e) {
      localStorage.removeItem('token');
      throw e;
    }
  },
  [authTypes.actions.LOGOUT]: () => {
    localStorage.removeItem('token'); // clear your user's token from localstorage
    api.auth.logout();
  },
  [authTypes.actions.SET_TOKEN]: () => {
    if (state.token) {
      api.auth.setToken(state.token);
    }
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
