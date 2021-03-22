import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  // Hash (# url에 들어가지 않도록 설정)
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      // url 주소
      path: "/news",
      // url 주소로 갔을 때, 표시될 컴포넌트 (해당 페이지)
      component: NewsView
    },
    {
      path: "/ask",
      component: AskView
    },
    {
      path: "/jobs",
      component: JobsView
    },
    {
      path: "/user",
      component: UserView
    },
    {
      path: "/item",
      component: ItemView
    }
  ]
});
