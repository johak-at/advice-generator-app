<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const items = computed(() => {
  if (route.path) {
    return ["home", ...route.path.split("/").slice(1)];
  }
  return [];
});
</script>

<template>
  <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>
