<template>
  <component :is="currentComponent"></component>
</template>

<script setup lang='ts'>
import { markRaw, ref, watch } from "vue";
import { useRoute } from "vue-router";
import welcomeVue from "./components/welcome.vue";
import mdVue from "./components/md.vue";
import startVue from "./components/start.vue";
import endVue from "./components/end.vue";

const currentComponent: any = ref(null)
const route = useRoute();

const updateCurrentComponent = () => {
  if (route.path === '/') {
    currentComponent.value = markRaw(welcomeVue)
  } else if (route.path === '/md') {
    currentComponent.value = markRaw(mdVue)
  } else if (route.path === '/start') {
    currentComponent.value = markRaw(startVue)
  } else {
    currentComponent.value = markRaw(endVue)
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