import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import $axios from './requests';
import SimpleVueValidator from 'simple-vue-validator';

Vue.use(SimpleVueValidator);
store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
})