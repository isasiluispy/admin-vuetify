import api from "@/api";

const state = {
  clientes: [],
  selectedCliente: null
};

const getters = {
  getClientes: state => state.clientes,
  getSelectedCliente: state => state.selectedCliente
};

const actions = {
  getClientes: async ({commit}) => {
    const response = await api.cliente.getAll();
    commit('setClientes', response.data);
  },
  getSelectedCliente: async ({commit}, id) => {
    const response = await api.cliente.get(id);
    commit('setSelectedCliente', response.data);
  },

};

const mutations = {
  setClientes: (state, clientes) => state.clientes = clientes,
  setSelectedCliente: (state, cliente) => state.selectedCliente = cliente
};

export default {
  state,
  getters,
  actions,
  mutations,
}
