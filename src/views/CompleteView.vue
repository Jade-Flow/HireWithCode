<template>
  <top name="完成挑战"></top>
  <div class="ruleForm">
    <el-form ref="formRef" :model="ruleForm" :rules="rules" label-width="0">
      <el-form-item prop="url">
        <el-input type="text" v-model="ruleForm.url" placeholder="github仓库url"></el-input>
      </el-form-item>
      <el-form-item prop="address">
        <el-input type="text" v-model="ruleForm.address" placeholder="Vercel在线体验地址"></el-input>
      </el-form-item>

      <el-button type="primary" class="submitBtn" :loading="loading" @click="submitForm()">提交作品</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import top from '../components/top.vue'
import { ElMessage, type FormInstance } from 'element-plus';
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.query.id;

interface ruleFormFace {
  url: string;
  address: string;
}
const ruleForm: ruleFormFace = reactive({
  url: '',
  address: ''
})

let rules = {
  url: [{ required: true, message: 'github仓库url不能为空', trigger: 'blur' }],
  address: [{ required: true, message: 'Vercel在线体验地址不能为空', trigger: 'blur' }],
}

const loading = ref(false)
const formRef = ref<FormInstance>()
const submitForm = async () => {
  try {
    const valid = await formRef.value?.validate()
    if (valid) {
      loading.value = true
      const { data, error } = await supabase
        .from('user')
        .update(
          ruleForm
        ).eq('id', id).select()
      if (data) {
        loading.value = false
        ElMessage.success('提交成功')
      }
    }
  } catch (error) {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.ruleForm {
  background: #fff;
  padding: 60px 50px;
  border-radius: 4px;
  width: 100%;

  .submitBtn {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }

}
</style>