<script setup>
import { Icon } from "@iconify/vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const name = storeToRefs(store).name;
const advice = ref("");

const newName = ref("");
function setName() {
  store.name = newName.value;
  newName.value = "";
}

// taking a picture and displaying it:
const imageUrl = ref(null);
async function takePic() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });
  imageUrl.value = image.webPath;
}

definePageMeta({
  alias: "/home",
});

async function getAdvice()
{
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data);
  advice = data;
}


</script>

<template>
  <v-container flex flex-col items-center gap-4>
    <h1>Lostei</h1>
    <Button @click="getAdvice"> Advice </Button>
    {{ advice }}
  </v-container>
</template>

<style>
/* * {
  border: 1px solid red;
} */
</style>
