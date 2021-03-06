import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // tells VueRouter to use BrowserRouter instead of HashRouter
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
  ]
});

new Vue({
  render: h => h(App),
  store, // the same as store: store, kinda like wrapping redux store to react application
  router, // importing the router~
}).$mount('#app')
