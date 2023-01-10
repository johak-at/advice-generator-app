<script setup>
import { Icon } from "@iconify/vue";
import { Camera, CameraResultType } from "@capacitor/camera";
const imageUrl = ref(null);

async function takePic() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });

  imageUrl.value = image.webPath;
}
</script>

<template>
  <v-main>
    <v-container flex flex-col items-center gap-4>
      <h1 b-1 text-red w="200px" text-center>Home</h1>
      <div flex gap-2></div>
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
      <v-btn @click="takePic"
        ><Icon text-6 icon="material-symbols:photo-camera-rounded"
      /></v-btn>
      <img :src="imageUrl" max-w="100%" />
    </v-container>
  </v-main>
</template>
