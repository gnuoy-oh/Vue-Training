<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.index">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    //#3
    ...mapGetters(["fetchedAsk"])

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
    // #1
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style scoped></style>
