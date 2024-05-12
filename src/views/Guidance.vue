<template>
  <div class="guidance-page container mx-auto p-4">
    <MarkdownContent />
    <div class="flex justify-center"><el-button @click="handleAccept">接受挑战</el-button></div>
  </div>
</template>

<script setup lang="ts">
import MarkdownContent from '@/assets/instruction.md'
import router from '@/router'

const handleAccept = () => {
  router.push('/challenge')
}
</script>
