import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => {
        return state.images;
    }
};

// complex business logic usually goes in here
const actions = {
    // getting other pieces of state to use
    fetchImages: async ({ rootState, commit }) => {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        // console.log(response);

        // commit has to call a mutation function to change data
        commit('setImages', response.data.data);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};