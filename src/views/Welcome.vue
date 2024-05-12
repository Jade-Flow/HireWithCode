<template>
  <div class="full-size centered-col">
    <img src="@/assets/logo.png" alt="Example PNG Image" class="w-10 h-10 rounded-full shadow-md mb-10" />
    <h1>欢迎来到「流转」线上面试环节，期待你的加入！</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import router from '@/router'

onMounted(() => {
  setTimeout(() => {
    router.push('guidance')
  }, 2000)
})
</script>
