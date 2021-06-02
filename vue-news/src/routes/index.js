import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";

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
      name: "news",
      // url 주소로 갔을 때, 표시될 컴포넌트 (해당 페이지)
      component: createListView("NewsView")
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView")
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView")
    },
    {
      // user에 대한 id라는 변수를 넘긴다는 뜻
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    }
  ]
});
