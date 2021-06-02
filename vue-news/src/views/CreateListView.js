// 하이 오더 컴포넌트는 컴포넌트의 로직(코드)을 재사용하기 위한 고급 기술이다.
import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    // JobsView / NewsView / AskView
    // name: "HOC Component",
    name: name,
    created() {
      bus.$emit("start:spinner");

      this.$store
        .dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch(() => {
          console.log("error");
        });
    },
    render(createElement) {
      return createElement(ListView);
    }
  };
}
