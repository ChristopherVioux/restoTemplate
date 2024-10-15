import Vue from "vue";
import App from "./App.vue";
import css from "@/assets/css/project.css";
import router from "./router";
import { sync } from "vuex-router-sync";
import store from "./store/store";

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  render: (h) => h(App),
  router,
  store,
  css,
}).$mount("#app");
