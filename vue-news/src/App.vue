<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url이 만약 jobs면 JobsView가 보여진다. -->
    <!-- url 주소에 따라서 해당하는 component가 보여지도록 한다. -->
    <router-view></router-view>
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
</style>
