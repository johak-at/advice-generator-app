<script setup>
import { Icon } from "@iconify/vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const jokes = storeToRefs(store).jokes;
let advice = ref("");
let satz = ref("");

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
  if (data.value.length <= 250)
    advice.value = "\"" + data.value + "\"";
}

function addJoke() {
  jokes.value.push({
    id: Date.now().toString(16),
    name: advice.value
  });
}

function show(index) {
  advice.value = jokes.value[index].name;
}

function del(index) {
  jokes.value.splice(index, 1);
}

function add() {
  if (satz.value.length <= 250 && satz.value.length > 0) {
    jokes.value.push({
      id: Date.now().toString(16),
      name: "\"" + satz.value + "\""
    });

    satz.value = "";
  }
}

function delAll() {
  jokes.value = [];
}

</script>

<template>

  <div class="dings" flex flex-col p-3 h-90 w-120 rounded-lg>
    <h1 text-xl font-bold text-center class="card-body">{{ advice }}</h1>
    <div flex justify-center gap-1>
      <label h-18 rounded-full for="my-modal" class="btn btn-outline btn-info">
        <Icon text-8 icon="material-symbols:menu" />
      </label>
      <label h-18 rounded-full @click="getAdvice" class="btn btn-outline btn-success">
        <Icon text-8 icon="ph:dice-five-fill" />
      </label>
      <label h-18 rounded-full @click="addJoke" class="btn btn-outline btn-warning">
        <Icon text-8 icon="material-symbols:heart-plus" />
      </label>
    </div>
  </div>

  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <ul v-for="(joke, index) in jokes" :key="joke.id">
        <label flex gap-4 items-center py-3 for="my-modal">
          <label rounded-full class="btn btn-outline btn-error" @click="del(index)">X</label>
          <p hover:bg-slate-700 active:bg-slate-800 w-full pl-2 pr-1 py-1 @click="show(index)">{{ joke.name }}</p>
        </label>
      </ul>
      <div flex justify-between class="modal-action">
        <label @click="delAll" class="btn btn-outline btn-error">Delete All</label>
        <input v-model="satz" @keyup.enter="add" placeholder="Write your joke" />
        <label v-if="satz.length > 0 && satz.length <= 250">{{ satz.length }}</label>
        <label text-red v-if="satz.length > 250">{{ satz.length }}</label>
        <label for="my-modal" class="btn">Leave</label>
      </div>
    </div>
  </div>

</template>

<style>
.dings {
  background-color: #313b47;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>