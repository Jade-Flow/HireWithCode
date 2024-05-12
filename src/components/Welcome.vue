<template>
  <div class="flex flex-col justify-center items-center">
    <img src="@/assets/logo.png" alt="Example PNG Image" class="w-10 h-10 rounded-full shadow-md mb-10" />
    <h1>欢迎来到「流转」线上面试环节，期待你的加入！</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Welcome',
  data() {
    return {
      message: 'Hello, world!',
    }
  },
})
</script>
