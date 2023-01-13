<script setup>
import { Icon } from "@iconify/vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

// useStore() and name handling:
const store = useStore();
const name = storeToRefs(store).name;

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
</script>

<template>
  <v-container flex flex-col items-center gap-4>
    <h1 text-center>Hello {{ name || "Friend" }}</h1>
    <v-btn @click="takePic">
      <Icon text-6 icon="material-symbols:photo-camera-rounded" />
    </v-btn>
    <img :src="imageUrl" max-w="100%" />
    <v-container grid md:grid-cols-2 gap-4>
      <v-container flex flex-col items-center gap-4>
        <Icon icon="logos:vuetifyjs" text-9 />
        <a href="https://next.vuetifyjs.com/en/components/all/" class="link">Vuetify Components</a>

        <div flex gap-2 w="400px" max-w="100%" items-center>
          <v-text-field label="Tell me your name" v-model="newName" @keyup.enter="setName"></v-text-field>
          <v-btn @click="setName">Set Name</v-btn>
        </div>
        <div flex flex-wrap justify-center gap-4>
          <v-btn> Button </v-btn>
          <v-btn color="primary">Primary</v-btn>
          <v-btn color="secondary">Secondary</v-btn>
          <v-btn color="accent">Accent</v-btn>
          <v-btn color="warning" variant="outlined">Warning</v-btn>
          <v-btn color="error" variant="outlined">Error</v-btn>
          <v-btn color="success" variant="outlined">Success</v-btn>
          <v-btn color="info" variant="outlined">Info</v-btn>
        </div>

        <v-card>
          <v-card-title>v-card-title</v-card-title>
          <v-card-subtitle>v-card-subtitle</v-card-subtitle>
          <v-card-text>
            <span>&lt;v-card-text </span>
            <span text-red>text-red </span>
            <span text-blue>text-blue </span>
            <span text-orange>text-orange</span>&gt;
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">Primary-Button</v-btn>
            <v-btn color="secondary">Secondary-Button</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
      <div flex flex-col items-center gap-4 p-4>
        <a href="https://daisyui.com/components/" class="link">daisyUI Components</a>
        <div flex gap-2>
          <input type="text" placeholder="Tell me your name" v-model="newName"
            class="input w-full max-w-xs bg-base-200" />
          <button class="btn" @click="setName">Set Name</button>
        </div>
        <div flex flex-wrap justify-center gap-4>
          <button class="btn">Button</button>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-warning btn-outline" b-1>Warning</button>
          <button class="btn btn-outline btn-error" b-1>Error</button>
          <button class="btn btn-success btn-outline" b-1>Success</button>
          <button class="btn btn-info btn-outline" b-1>Info</button>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<style>
/* * {
  border: 1px solid red;
} */
</style>
