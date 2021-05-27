<template>
  <div>
    <div v-for="item in $store.state.news" v-bind:key="item.index">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }}
        by
        <!-- http://localhost:8080/user/c0nsumer 의 형태로 user가 뒤에 넘어온다. -->
        <router-link v-bind:to="`/user/${item.user}`">{{
          item.user
        }}</router-link>
      </small>
    </div>
    news
  </div>
</template>

<script>
export default {
  props: [],

  // 1. 데이터 호출
  created() {
    console.log("호출 전: ", this);
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>

<style scoped></style>
