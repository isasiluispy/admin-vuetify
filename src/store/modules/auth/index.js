import api from "@/api";

const state = {
  token: localStorage.getItem('token') || '',
};

const getters = {
  isAuthenticated: state => !!state.token
};

const actions = {
  login: async ({commit}, userData) => {
    try {
      const response = await api.auth.login(userData);
      const token = response.data.key;
      localStorage.setItem('token', token); // store the token in localstorage
      commit('setToken', token)
    } catch (e) {
      localStorage.removeItem('token');
      throw e;
    }
  },
  logout: () => {
    localStorage.removeItem('token'); // clear your user's token from localstorage
    api.auth.logout();
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
