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
    getSelectedCliente: ({commit}, id) => {
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
    createCliente: ({commit}, data) => {
        return new Promise((resolve, reject) => {
            api.cliente.create(data)
                .then(response => {
                    commit('appendCliente', response.data);
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error);
                })
        })
    },
    updateCliente: ({commit}, {id, data}) => {
        return new Promise((resolve, reject) => {
            api.cliente.update(id, data)
                .then(response => {
                    commit('updateCliente', response.data);
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

};

const mutations = {
    setClientes: (state, clientes) => state.clientes = clientes,
    setSelectedCliente: (state, cliente) => state.selectedCliente = cliente,
    appendCliente: (state, cliente) => state.clientes.push(cliente),
    updateCliente: (state, clienteUpdated) => {
        state.clientes = state.clientes.map(cliente => {
            if (cliente.id === clienteUpdated.id) {
                return {...clienteUpdated}
            }
            return cliente
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}
