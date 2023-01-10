// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  app: { pageTransition: { name: "page", mode: "out-in" } },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  unocss: {
    // presets
    wind: true, // enabled `@unocss/preset-wind`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [
      ["text-red", { color: "#E4003A" }],
      ["text-orange", { color: "#F7A823" }],
      ["text-blue", { color: "#005577" }],
      ["bg-red", { "background-color": "#E4003A" }],
      ["bg-orange", { "background-color": "#F7A823" }],
      ["bg-blue", { "background-color": "#005577" }],
    ],
  },
  pwa: {
    // workbox: {
    //   enabled: true,
    // },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
});
