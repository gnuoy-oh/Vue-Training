<template>
  <div>
    <div v-for="job in fetchedAsk" v-bind:key="job.index">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  compoted: {
    // #3
    ...mapGetters({
      fetchedAsk: "fetchedAsk"
    })

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
