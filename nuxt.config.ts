// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  app: { pageTransition: { name: "page", mode: "out-in" } },
  css: ["vuetify/lib/styles/main.sass"],
  ssr: false,
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
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [
      ["text-red", { color: "#E4003A" }],
      ["text-orange", { color: "#F7A823" }],
      ["text-blue", { color: "#005577" }],
    ],
  },
});
