<template
  ><div>
    <ul class="news-list">
      <li v-for="item in listItems" v-bind:key="item.index" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <!-- 기타 정보 영역 -->
        <div class="news">
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">{{
                item.title
              }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <!-- http://localhost:8080/user/c0nsumer 의 형태로 user가 뒤에 넘어온다. -->
            <router-link
              v-bind:to="`/user/${item.user}`"
              class="link-text"
              v-if="item.user"
              >{{ item.user }}</router-link
            >
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }
  }
};
</script>

<style scoped>
.wrap {
  padding: 8px;
}
.news {
  flex: 1;
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
