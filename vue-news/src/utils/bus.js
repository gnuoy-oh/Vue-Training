// bus?
// 빈 이벤트 객체를 만들어서, 그 이벤트 객체로 컴포넌트 간에 데이터를 전달하는 것
import Vue from "vue";

// (export const 로 선언하는 경우, 사용 방법)
// bus.js
// export const bus = new Vue();

// (export cont 로 선언하는 경우, 사용 방법)
// App.vue
// import {bus} from './bus.js'

// (export default 로 선언하는 경우.)
// bus.js
export default new Vue();

// (export default 로 선언하는 경우.)
// App.vue
// 변수명 자유롭게 입력 가능
// import Bus from './bus.js'
