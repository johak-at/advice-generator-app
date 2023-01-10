<script setup>
useHead({
  script: [
    {
      async: true,
      crossorigin: "anonymous",
      type: "module",
      src: "https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js",
    },
  ],
});
</script>

<template>
  <v-app>
    <NuxtLayout> <NuxtPage /> </NuxtLayout>
  </v-app>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
