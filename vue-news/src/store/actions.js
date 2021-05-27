import {
  fetchNewsList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        // actions에서는 state를 직접적으로 접근할 수 없고, mutations를 거쳐서 stats를 사용해야 한다.
        console.log(response.data);
        context.commit("SET_NEWS", response.data);
        // state.news = reponse.data
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    fetchJobList()
      .then(response => {
        // this.jobs = response.data;
        context.commit("SET_JOBS", response.data);
      })
      .catch(error => console.log(error));
  },

  // 디스트럭처링을 적용한 FETCH_ASKS
  // context.commit = { commit }
  // response.data = { data }
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch(error => console.log(error));
  },

  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(error => console.log(error));
  }
};
