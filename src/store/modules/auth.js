const state = {
    token: null
};

const getters = {
    // the updated state object is the global state object not just the state in this file
    isLoggedIn: (state) => {
        return !!state.token
    }
};

const actions = {
    // the first argument is provided by vuex so we can work with stuff in vuex
    logout: ({ commit }) => {
        // do not directly call mutations.setToken()!! use commit() instead
        commit('setToken', null); // first argument is the mutation function we wish to call, second is the value we want to put in
    }
};

const mutations = {
    // when this mutation function is called, it is called with the state as the first param and followed by the token itself
    setToken: (state, token) => { // again, this is the global state of the entire application
        state.token = token;
    }
};