<template>
  <component :is="currentComponent"></component>
</template>

<script setup lang='ts'>
import { markRaw, ref, watch } from "vue";
import { useRoute } from "vue-router";
import welcomeVue from "./components/welcome.vue";
import mdVue from "./components/md.vue";

const currentComponent: any = ref(null)
const route = useRoute();

const updateCurrentComponent = () => {
  if (route.path === '/') {
    currentComponent.value = markRaw(welcomeVue)
  } else if (route.path === '/md') {
    currentComponent.value = markRaw(mdVue)
  }
}
updateCurrentComponent
watch(route, updateCurrentComponent)
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>