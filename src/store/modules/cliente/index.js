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
    getClientes: ({commit}) => {
        return new Promise(((resolve, reject) => {
            api.cliente.getAll()
                .then(response => {
                    commit('setClientes', response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    commit('setClientes', []);
                    reject(error);
                })
        }));
    },
    getSelectedCliente: async ({commit}, id) => {
        return new Promise((resolve, reject) => {
            api.cliente.get(id)
                .then(response => {
                    commit('setSelectedCliente', response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    commit('setSelectedCliente', null);
                    reject(error);
                })
        });
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
