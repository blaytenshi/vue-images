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

};

const mutations = {
    // when this mutation function is called, it is called with the state as the first param and followed by the token itself
    setToken: (state, token) => { // again, this is the global state of the entire application
        state.token = token;
    }
};