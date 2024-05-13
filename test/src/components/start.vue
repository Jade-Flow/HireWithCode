<template>
    <div class="main">
        <el-card shadow="hover" v-loading="loading" class="main-card">
            <el-form :model="postData" :rules="rules" ref="startRef">
                <el-form-item prop="id" label="ID" label-width="50px">
                    <el-input size="large" v-model="postData.id" placeholder="请输入github id" />
                </el-form-item>
                <el-form-item prop="email" label="邮箱" label-width="50px">
                    <el-input size="large" type="email" v-model="postData.email" placeholder="请输入邮箱" />
                </el-form-item>
            </el-form>
            <div class="main-card-btn">
                <el-button type="success" plain @click="searchForm(startRef)" size="large">接受挑战</el-button>
                <el-button type="danger" plain @click="resetForm(startRef)" size="large">重置</el-button>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { Ref, reactive, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';

const startRef: Ref<FormInstance | undefined> = ref()
const loading: Ref<boolean> = ref(false)
const postData = reactive({
    id: '',
    email: ''
})
const route = useRouter();
const rules: FormRules = reactive({
    id: [
        { required: true, message: '请输入github id', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
    ]
})
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const searchForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid: boolean) => {
        if (valid) {
            loading.value = true
            await new Promise(resolve => setTimeout(resolve, 700));
            loading.value = false
            route.push('/end')
        }
    })
}
</script>

<style scoped lang="less">
.main {
    height: 100vh;
    background-color: #EAF7E3;
    display: flex;
    align-items: center;
    justify-content: center;

    &-card {
        width: 400px;

        &-btn {
            text-align: center;

            .el-button {
                width: 119px;
            }
        }
    }
}
</style>