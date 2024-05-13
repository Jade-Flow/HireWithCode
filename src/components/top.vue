<template>
  <header class="header-item">
    <p>{{ name }}</p>
  </header>

</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  name: String // 定义prop的类型
})

</script>

<style scoped lang="scss">
.header-item {
  height: 50px;
  background: linear-gradient(to bottom, rgb(135 187 236) 10%, rgb(173 220 240));
  width: 100%;

  p {
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    line-height: 48px;
  }
}
</style>
