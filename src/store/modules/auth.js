import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')
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
        window.localStorage.removeItem('imgur_token');
    },
    login: () => {
        api.login(); // this navigates user away and takes them to log in
    },
    finalizeLogin: ({ commit }, hash) => {
        // the hash string comes in as:
        // #/access_token=31595b94eb3a9feae5fea7ba2e5011e8df2b2424&expires_in=315360000&token_type=bearer&refresh_token=645f41723ed5655e9dba0022c0bdffee0bcd9905&account_username=afutureme&account_id=1885813
        const query = qs.parse(hash.replace("#", ""));
        commit('setToken', query.access_token); // pulling off the access_token from it
        window.localStorage.setItem('imgur_token', query.access_token);
    },
};

const mutations = {
    // when this mutation function is called, it is called with the state as the first param and followed by the token itself
    setToken: (state, token) => { // again, this is the global state of the entire application
        state.token = token;
    }
};

export default {
    state,
    getters, 
    actions, 
    mutations
}