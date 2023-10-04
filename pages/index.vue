<script setup>
import { Icon } from "@iconify/vue";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const jokes = storeToRefs(store).jokes;
let cardText = ref("");
let inputText = ref("");

definePageMeta({
  alias: "/home",
});

onMounted(async () => {
  getChuck();
});

async function getChuck() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  let data = await response.json();
  if (data.value.length <= 250)
    cardText.value = "\"" + data.value + "\"";
}

function show(id) {
  cardText.value = jokes.value.filter(joke => joke.id == id)[0].name;
}

function addFav() {
  jokes.value.push({
    id: Date.now().toString(16),
    name: cardText.value
  });
}

function addInputToFav() {
  if (inputText.value.length <= 250 && inputText.value.length > 0) {
    jokes.value.push({
      id: Date.now().toString(16),
      name: "\"" + inputText.value + "\""
    });
    inputText.value = "";
  }
}

function del(id) {
  jokes.value = jokes.value.filter(joke => joke.id != id);
}

function delAll() {
  jokes.value = [];
}

</script>

<template>

  <div class="dings" flex flex-col p-3 h-90 w-120 rounded-lg>
    <h1 text-xl font-bold text-center class="card-body">{{ cardText }}</h1>
    <div flex justify-center gap-1>
      <label h-18 rounded-full for="my-modal" class="btn btn-outline btn-info">
        <Icon text-8 icon="material-symbols:menu" />
      </label>
      <label h-18 rounded-full @click="getChuck" class="btn btn-outline btn-success">
        <Icon text-8 icon="ph:dice-five-fill" />
      </label>
      <label h-18 rounded-full @click="addFav" class="btn btn-outline btn-warning">
        <Icon text-8 icon="material-symbols:heart-plus" />
      </label>
    </div>
  </div>

  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <ul v-for="joke in jokes" :key="joke.id">
        <label flex gap-4 items-center py-3 for="my-modal">
          <label rounded-full class="btn btn-outline btn-error" @click="del(joke.id)">X</label>
          <p hover:bg-slate-700 active:bg-slate-800 w-full pl-2 pr-1 py-1 @click="show(joke.id)">{{ joke.name }}</p>
        </label>
      </ul>
      <div flex justify-between class="modal-action">
        <label @click="delAll" class="btn btn-outline btn-error">Delete All</label>
        <input v-model="inputText" @keyup.enter="addInputToFav" placeholder="Write your joke" />
        <label v-if="inputText.length > 0 && inputText.length <= 250">{{ inputText.length }}</label>
        <label text-red v-if="inputText.length > 250">{{ inputText.length }}</label>
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