<template>
  <div>
    <div v-for="user in users" v-bind:key="user.index">{{ user.title }}</div>
    news
  </div>
</template>

<script>
// 통신 관련 API 라이브러리
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      users: []
    };
  },

  created() {
    fetchNewsList()
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style scoped></style>
