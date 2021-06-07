import { fetchUserInfo, fetchItemInfo, fetchList } from "../api/index.js";

export default {
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then(response => {
  //       // actions에서는 state를 직접적으로 접근할 수 없고, mutations를 거쳐서 stats를 사용해야 한다.
  //       context.commit("SET_NEWS", response.data);
  //       // state.news = reponse.data
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // FETCH_JOBS(context) {
  //   fetchJobList()
  //     .then(response => {
  //       // this.jobs = response.data;
  //       context.commit("SET_JOBS", response.data);
  //     })
  //     .catch(error => console.log(error));
  // },

  // // 디스트럭처링을 적용한 FETCH_ASKS
  // // context.commit = { commit }
  // // response.data = { data }
  // FETCH_ASKS({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASK", data);
  //     })
  //     .catch(error => console.log(error));
  // },

  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(error => console.log(error));
  },

  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch(error => console.log(error));
  },

  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3
    return fetchList(pageName)
      .then(response => {
        // #4
        console.log(4);
        commit("SET_LIST", response.data);
        return response;
      })
      .catch(error => console.log(error));
  }
};
