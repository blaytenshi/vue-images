import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  render: h => h(App),
  store, // the same as store: store, kinda like wrapping redux store to react application
}).$mount('#app')
