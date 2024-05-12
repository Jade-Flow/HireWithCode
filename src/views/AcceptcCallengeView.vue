<template>
  <top name="接受挑战"></top>
  <div class="ruleForm">
    <el-form ref="formRef" :model="ruleForm" :rules="rules" label-width="0">
      <el-form-item prop="githubId">
        <el-input type="text" v-model="ruleForm.githubId" placeholder="用户输入自己的 github id"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input type="text" v-model="ruleForm.email" placeholder="邮箱"></el-input>
      </el-form-item>

      <el-button type="primary" class="submitBtn" :loading="loading" @click="submitForm()">接受挑战</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import top from '../components/top.vue'
import { supabase } from '@/supabase'
import { ElMessage, type FormInstance } from 'element-plus';
import { useRouter } from 'vue-router';
const router = useRouter();

interface ruleFormFace {
  githubId: string;
  email: string;
}
const ruleForm: ruleFormFace = reactive({
  githubId: '',
  email: ''
})

const loading = ref(false)

const formRef = ref<FormInstance>()
let rules = {
  githubId: [{ required: true, message: 'github id不能为空', trigger: 'blur' }],
  email: [{ required: true, message: '邮箱不能为空', trigger: 'blur' },
  { type: 'email', message: '邮箱格式错误', trigger: 'blur' }],
}
const submitForm = async () => {
  try {
    const valid = await formRef.value?.validate()
    if (valid) {
      loading.value = true
      const { data, error } = await supabase
        .from('user')
        .insert([
          ruleForm
        ])
        .select()
      if (data) {
        loading.value = false
        let id = data[0]?.id
        ElMessage.success('success')
        router.push({ path: '/complete', query: { id } });
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