import api from "@/api";

const state = {
    token: localStorage.getItem('token') || '',
};

const getters = {
    isAuthenticated: state => !!state.token
};

const actions = {
    login: ({commit}, userData) => {
        return new Promise((resolve, reject) => {
            api.auth.login(userData)
                .then(response => {
                    const token = response.data.key;
                    localStorage.setItem('token', token); // store the token in localstorage
                    commit('setToken', token);

                    // Let the calling function know that http is done. You may send some data back
                    resolve(response.data);
                })
                .catch(error => {
                    localStorage.removeItem('token');

                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
        });
    },
    logout: () => {
        return new Promise(resolve => {
            localStorage.removeItem('token'); // clear your user's token from localstorage
            api.auth.logout();
            resolve();
        });
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
