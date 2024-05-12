<template>
  <div class="centered-col">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="github 仓库 url">
        <el-input placeholder="请输入github 仓库 url" v-model="form.github" />
      </el-form-item>
      <el-form-item label="Vercel在线体验地址">
        <el-input placeholder="Vercel在线体验地址" v-model="form.vercel" />
      </el-form-item>
    </el-form>
    <el-button @click="handleAccept" :loading="onLoading"> 提交作品 </el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { supabase } from '@/api'
import router from '@/router'

const onLoading = ref(false)
const form = reactive({
  github: '',
  vercel: '',
})

const handleAccept = async () => {
  addRow()
}

const addRow = async () => {
  onLoading.value = true
  const { github, vercel } = form
  const { data, error } = await supabase.from('finish').insert([
    {
      github,
      vercel,
    },
  ])
  onLoading.value = false
  router.push('end')
}
</script>
