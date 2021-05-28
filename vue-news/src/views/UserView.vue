<template>
  <div class="wrap">
    <userProfile></userProfile>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
  </div>
</template>

<script>
import userProfile from "../components/UserProfile.vue";
export default {
  components: {
    userProfile
  },

  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  }
};
</script>
<style scoped>
.wrap {
  padding: 8px;
}
p {
  padding: 8px 0;
  margin: 0;
}
</style>
