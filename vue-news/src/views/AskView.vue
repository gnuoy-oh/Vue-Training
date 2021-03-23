<template>
  <div>
    <div v-for="ask in this.$store.state.asks" v-bind:key="ask.index">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style scoped></style>
