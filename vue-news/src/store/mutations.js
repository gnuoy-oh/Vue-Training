export default {
  SET_NEWS(state, news) {
    state.news = news;
    console.log(state.news);
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
    console.log(state.jobs);
  },
  SET_ASK(state, ask) {
    state.ask = ask;
    console.log(state.ask);
  },
  SET_USER(state, user) {
    state.user = user;
    console.log(state.user);
  }
};
