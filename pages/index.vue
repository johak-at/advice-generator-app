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

onMounted(() => {
  getAdvice();
});

async function getAdvice() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  let data = await response.json();
  console.log(data);
  advice.value = "\"" + data.value + "\"";
}


</script>

<template>
  <v-container class="dings" flex flex-col place-items-center gap-4>
    <div flex flex-col items-center p-4 h-90 w-120 rounded-lg bg-slate-700>
      <h1 text-xl font-bold text-center class="card-body">{{ advice }}</h1>
      <button h-18 rounded-full @click="getAdvice" class="maul">
        <Icon text-8 text-black icon="ph:dice-five-fill" />
      </button>
    </div>
  </v-container>
  <!--
  add an image here
-->


</template>

<style>
.dings {
  /*
  * Place the thing in the center of the screen
  */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.maul {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 90px;
  box-shadow: 0 9px #1e8a62;
}

/*
.maul:hover {
  background-color: #3e8e41
}
*/

.maul:active {
  background-color: #04AA6D;
  box-shadow: 0 5px #1e8a62;
  transform: translateY(4px);
}
</style>
