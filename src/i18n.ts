import { createI18n } from "vue-i18n";
// 通过选项创建 VueI18n 实例
const getAllLanguageName = () => {
  const files = require.context("./locales", false, /\.ts$/);
  let allName: any = {};
  files.keys().forEach((key) => {
    const localeName = key.replace(/(\.\/|\.ts)/g, "");
    allName[localeName] = files(key).default;
  });
  return allName;
};
const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "zh-CN",
  messages: getAllLanguageName(),
});

export default i18n;
