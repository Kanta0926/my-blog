import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
  },
  compatibilityDate: "2025-06-03", // 推奨される日付の追加
});
