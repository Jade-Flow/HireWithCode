<template>
  <div class="container">
    <div>
      <top name="面试引导"></top>
    </div>
    <mavon-editor v-model="readmeContent" :subfield="dataConfig.subfield" :defaultOpen="dataConfig.defaultOpen" :toolbarsFlag="dataConfig.toolbarsFlag" />
    <div class="next">
      <el-button type="primary" @click="nextClick">下一步</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import top from '../components/top.vue'
import { useRouter } from 'vue-router';
import 'mavon-editor/dist/markdown/github-markdown.min.css'
import 'mavon-editor/dist/katex/katex.min.css'
const router = useRouter();


let dataConfig = ref({
  subfield: false,// 单双栏模式
  defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
  editable: false,
  toolbarsFlag: false,
  scrollStyle: false,
  boxShadow: false//边框
})

let readmeContent = ref('')

fetch('./README.md').then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.text();
}).then(text => {
  readmeContent.value = text
}).catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});


const nextClick = () => {
  router.push('/accept');
}
</script>

<style scoped lang="scss">
.container {
  padding: 30px 0;

  .next {
    padding: 20px 30px;
    background: #fff;
    text-align: center;
    line-height: 38px;
    color: #fff;
    cursor: pointer;

    button {
      width: 100%;
      height: 45px;
      font-size: 18px;
    }
  }
}
</style>
