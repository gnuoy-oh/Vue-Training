<template>
  <!-- 질문 상세 정보-->
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <!-- 질문 상세 정보-->
    <div class="user-container">
      <div class="user-description">
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 내용 -->
          <!-- 해당 내부가 페이지 별로(UserView->id, ItemView->user) 접근하는 속성이 다르기 때문에 slot으로 작업한다. -->
        </slot>
        <div class="time">
          <slot name="time">
            <!-- 상위 컴포넌트에서 정의할 내용 -->
          </slot>
          <slot name="karma">
            <!-- 상위 컴포넌트에서 정의할 내용 -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  computed: {},
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
