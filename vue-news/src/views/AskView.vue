<template>
  <div class="wrap">
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem";

export default {
  components: {
    ListItem
  },
  computed: {
    //#3
    // ...mapGetters(["fetchedAsk"])
    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
    // #1
    // ask(){
    //   return this.$store.state.ask;
    // }
    // },
    // created() {
    //   this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style scoped></style>
