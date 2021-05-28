<template>
  <div class="wrap">
    <ul class="news-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.index" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>

        <!-- 기타 정보 영역 -->
        <div class="item">
          <p class="news-title">
            <router-link :to="`item/${item.id}`" class="link-text">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <!-- http://localhost:8080/user/c0nsumer 의 형태로 user가 뒤에 넘어온다. -->
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.wrap {
  padding: 8px;
}
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b833;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
