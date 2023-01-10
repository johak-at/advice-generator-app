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
  <div class="text-sm breadcrumbs">
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
