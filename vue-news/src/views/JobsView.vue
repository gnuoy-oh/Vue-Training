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
  }
};
</script>

<style scoped></style>
