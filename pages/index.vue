<script setup>
import { Icon } from "@iconify/vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const name = storeToRefs(store).name;
let advice = ref("");

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

async function getAdvice() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  console.log(data);
  advice.value = data.value
}


</script>

<template>
  <v-container flex flex-col items-center gap-4>
    <div>
      <h1>Lostei</h1>
      <button @click="getAdvice" class="btn btn-primary"> Advice </button>
      <h1>{{ advice }}</h1>
    </div>
  </v-container>
</template>

<style>
/* * {
  border: 1px solid red;
} */
</style>
