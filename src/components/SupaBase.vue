<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ExampleComponent',
  setup() {
    const title = ref<string>('Hello TypeScript with Vue 3')
    return { title }
  },
})
</script>

<style scoped>
/* styles */
</style>
