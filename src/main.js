import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'




new Vue({
  router,
  store,
  Vuelidate,
  render: (h) => h(App),
}).$mount("#app");
