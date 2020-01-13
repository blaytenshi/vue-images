import api from '../../api/imgur';
import { router } from '../../main';

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
    },
    uploadImages: async ({ rootState }, images) => {
        // console.log(images);
        // get access token
        const { token } = rootState.auth;

        // call api to do upload
        await api.uploadImages(images, token);

        // redirect user to ImageList component
        router.push('/');
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