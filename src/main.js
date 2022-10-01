import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { initializeApp } from 'firebase/app';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA2oe03vl2Qic1LyPJashShOnUipYHUrK8',
      authDomain: 'onlinestore-3fb0c.firebaseapp.com',
      projectId: 'onlinestore-3fb0c',
      storageBucket: 'onlinestore-3fb0c.appspot.com',
      messagingSenderId: '111041543370',
      appId: '1:111041543370:web:50e2c31c32f1c67b1d4833',
      measurementId: 'G-Z9MZKV9F5S',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  },
}).$mount('#app');
