// 애플리케이션 설정(플러그인, 구조, 라이브러리) 구조를 한번에 확인할 수 있도록 개발하는게 좋다.
import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router
}).$mount("#app");
