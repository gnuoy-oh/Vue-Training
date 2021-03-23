import Vue from "vue";
import Vuex from "vuex";

// Vuex -> 상태관리 도구. 여러 컴포넌트간에 공유되는 데이터 속성
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: []
  }
});
