import Vue from "vue";
import Vuex from "vuex";
// 통신 관련 API 라이브러리
import { fetchNewsList, fetchJobList, fetchAskList } from "../api/index.js";

// Vuex -> 상태관리 도구. 여러 컴포넌트간에 공유되는 데이터 속성
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: []
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          // actions에서는 state를 직접적으로 접근할 수 없고, mutations를 거쳐서 stats를 사용해야 한다.
          console.log(response.data);
          context.commit("SET_NEWS", response.data);
          // state.news = reponse.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_JOBS(context) {
      fetchJobList()
        .then((response) => {
          // this.jobs = response.data;
          context.commit("SET_JOBS", response.data);
        })
        .catch((error) => console.log(error));
    },

    // 디스트럭처링을 적용한 FETCH_ASKS
    // context.commit = { commit }
    // response.data = { data }
    FETCH_ASKS({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit("SET_ASKS", data);
        })
        .catch((error) => console.log(error));
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
      console.log(state.news);
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
      console.log(state.jobs);
    },
    SET_ASKS(state, asks) {
      state.asks = asks;
      console.log(state.asks);
    }
  }
});
