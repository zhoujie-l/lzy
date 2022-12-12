import { createApp } from "vue";
// import ElementPlus from "element-plus";
// import "element-plus/theme-chalk/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";

// createApp(App).use(ElementPlus).mount("#app");
createApp(App).use(Antd).mount("#app");
