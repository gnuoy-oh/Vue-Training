<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url이 만약 jobs면 JobsView가 보여진다. -->
    <!-- url 주소에 따라서 해당하는 component가 보여지도록 한다. -->
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/Toolbar.vue";
export default {
  name: "App",
  components: { ToolBar },
  methods: {}
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495a;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
