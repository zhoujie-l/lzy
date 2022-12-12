import LongList from "./src/main.vue";
// 为组件提供 install 安装方法，供按需引入
LongList.install = function (Vue) {
  Vue.component(LongList.name, LongList);
};
export default LongList;

export { LongList };
