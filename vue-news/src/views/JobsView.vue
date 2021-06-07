<template>
  <list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixins from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem
  },
  mixins: [ListMixins]
};
</script>

<style></style>
