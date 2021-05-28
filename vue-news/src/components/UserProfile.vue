<template>
  <!-- 질문 상세 정보-->
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <p>name: {{ userInfo.id }}</p>
      <p>karma: {{ userInfo.karma }}</p>
      <p>created: {{ userInfo.created }}</p>
      <!-- <router-link :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
      </router-link>
      <div class="time">
        {{ fetchedItem.time_ago }}
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {}
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.8rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
