<template>
  <div class="wrap">
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
import bus from "../utils/bus.js";
export default {
  components: {
    ListItem
  },
  computed: {},
  created() {
    bus.$emit("start:spinner");

    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASKS")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch(() => {
          console.log("error");
        });
    }, 3000);
  }
};
</script>

<style scoped></style>
