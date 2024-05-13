<template>
  <component :is="currentComponent"></component>
</template>

<script setup lang='ts'>
import { markRaw, ref, watch } from "vue";
import { useRoute } from "vue-router";
import welcomeVue from "./components/welcome.vue";

const currentComponent: any = ref(null)
const route = useRoute();

const updateCurrentComponent = () => {
  if (route.path === '/') {
    currentComponent.value = markRaw(welcomeVue)
  }
}
updateCurrentComponent
watch(route, updateCurrentComponent)
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>