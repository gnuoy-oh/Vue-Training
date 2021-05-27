<template>
  <div>
    <div v-for="job in $store.state.jobs" v-bind:key="job.index">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}.{{ job.domain }}</small>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  computed: {
    // #3
    // ...mapGetters({
    //   fetchedAsk: "fetchedAsk"
    // })
    // #2
    // ...mapState({
    //   fetchedAsk: (state) => state.fetchedAsk
    // })
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style scoped></style>
