<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url이 만약 jobs면 JobsView가 보여진다. -->
    <!-- url 주소에 따라서 해당하는 component가 보여지도록 한다. -->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/Toolbar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  name: "App",
  components: { ToolBar, Spinner },
  data() {
    return {
      loadingStatus: false
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  }
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
