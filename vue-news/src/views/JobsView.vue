<template>
  <div>
    <div v-for="job in this.$store.state.jobs" v-bind:key="job.index">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style scoped></style>
