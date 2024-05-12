<template>
  <div class="centered-col">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Github Id">
        <el-input placeholder="请输入Github Id" v-model="form.id" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input placeholder="请输入邮箱" v-model="form.email" />
      </el-form-item>
    </el-form>
    <el-button @click="handleAccept" :loading="onLoading"> 接受挑战 </el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { supabase } from '@/api'
import router from '@/router'

const onLoading = ref(false)
const form = reactive({
  id: '',
  email: '',
})

const handleAccept = async () => {
  addRow()
}

const addRow = async () => {
  onLoading.value = true
  const { data, error } = await supabase.from('accept').insert([
    {
      form: {
        id: form.id,
        email: form.email,
      },
    },
  ])
  onLoading.value = false
  router.push('finish')
}
</script>
