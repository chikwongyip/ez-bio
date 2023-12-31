import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueRouter from "vue-router";
import routes from "../src/router/router";
import VueCookies from "vue-cookies";
import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueRouter);
Vue.use(VueCookies, { expires: "7d" });
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: routes
});
new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");

//to-do:favoricon
// aboutus
// admin

