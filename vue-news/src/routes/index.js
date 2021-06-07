import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import bus from "../utils/bus.js";
import { store } from "../store/index.js";
// import createListView from "../views/CreateListView.js";

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
      // component: createListView("NewsView")
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        // #1
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            // bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    {
      path: "/ask",
      name: "ask",
      // component: createListView("AskView")
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        // #1
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            // bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView("JobsView")
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        // #1
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            // bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      }
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
