<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user.index">
      {{ user.title }}
    </div>
    news
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },

  // 1. 데이터 호출
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // fetchNewsList()
    //   .then((response) => {
    //     // 2. 담아온 데이터를 users에 담아준다.
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
};
</script>

<style scoped></style>
