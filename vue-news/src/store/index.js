import Vue from "vue";
import Vuex from "vuex";
// 통신 관련 API 라이브러리
import mutations from "./mutations.js";
import actions from "./actions.js";
// Vuex -> 상태관리 도구. 여러 컴포넌트간에 공유되는 데이터 속성
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: []
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  actions: actions,
  mutations: mutations
});
