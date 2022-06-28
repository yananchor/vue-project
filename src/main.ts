import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ZhLocale from 'element-plus/lib/locale/lang/zh-cn'; // 中文
import EhLocale from 'element-plus/lib/locale/lang/en'; // 英文
import "./assets/icons/iconfont/iconfont.css";
import "./index.css";
import i18n from "./i18n";
const app = createApp(App);
app.use(ElementPlus).use(i18n).use(store).use(router).mount("#app");
// Register all icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
