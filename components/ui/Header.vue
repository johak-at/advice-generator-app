<script setup>
import { Icon } from "@iconify/vue";
import { useTheme } from "vuetify";
import { useStore } from "~/store/store";

const router = useRouter();
const drawer = ref(false);
const theme = useTheme();
const store = useStore();

function toggleTheme() {
  if (theme.global.current.value.dark) {
    theme.global.name.value = "myCustomLightTheme";
    store.daisyTheme = "light";
  } else {
    theme.global.name.value = "myCustomDarkTheme";
    store.daisyTheme = "dark";
  }
}
</script>

<template>
  <v-navigation-drawer v-model="drawer" app>
    <nav class="d-flex flex-column">
      <span cursor-pointer @click="router.push('/')"
        >Home-Link with router.push()</span
      >
      <NuxtLink to="/dummy">Dummy-Link with NuxtLink</NuxtLink>
    </nav>
  </v-navigation-drawer>

  <v-app-bar app class="pr-4">
    <v-app-bar-nav-icon @click="drawer = !drawer"
      ><Icon icon="game-icons:hamburger-menu" text-5
    /></v-app-bar-nav-icon>

    <div flex gap-2 text-5 items-center mr-4 ml-auto>
      <Icon icon="logos:nuxt-icon" />
      <Icon icon="logos:vuetifyjs" />
      <Icon icon="logos:unocss" />
      <Icon icon="logos:tailwindcss-icon" />
      <img src="daisy.ico" alt="" width="20" />
      <Icon icon="line-md:iconify1" />
      <Icon icon="logos:capacitorjs-icon" />
      <Icon
        icon="mdi:theme-light-dark"
        @click="toggleTheme"
        ml-4
        text-7
        cursor-pointer
      />
    </div>
  </v-app-bar>
</template>
