import Form from "./src/main.vue";
// 为组件提供 install 安装方法，供按需引入
Form.install = function (Vue) {
  Vue.component(Form.name, Form);
};
export default Form;

export { Form };
