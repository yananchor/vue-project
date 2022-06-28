import { createI18n } from "vue-i18n";
// 通过选项创建 VueI18n 实例
const i18n = createI18n({
  locale: "zh",
  fallbackLocale: "zh",
  messages: {
    en: {
      home: "home",
    },
    zh: {
      home: "首页",
    },
  },
});

export default i18n;
