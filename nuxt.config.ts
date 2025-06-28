import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: [
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.css",
    "@/assets/css/main.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
  },
  ssr: true,
  nitro: {
    preset: "static",
  },
  app: {
    baseURL: "/blog/",
  },

  compatibilityDate: "2025-06-03",
});
