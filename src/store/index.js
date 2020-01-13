import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

Vue.use(Vuex); // this connects vue with vuex like a middleware

export default new Vuex.Store({
    modules: {
        auth,
        images
    }
})