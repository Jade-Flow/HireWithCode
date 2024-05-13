<template>
    <div class="main">
        <el-card shadow="hover" v-loading="loading" class="main-card">
            <el-form :model="postData" :rules="rules" ref="endRef">
                <el-form-item prop="url" label="URL" label-width="50px">
                    <el-input size="large" v-model="postData.url" placeholder="请输入github仓库url" />
                </el-form-item>
                <el-form-item prop="vercel" label="地址" label-width="50px">
                    <el-input size="large" v-model="postData.vercel" placeholder="请输入Vercel在线体验地址" />
                </el-form-item>
            </el-form>
            <div class="main-card-btn">
                <el-button type="success" plain @click="searchForm(endRef)" size="large">提交作品</el-button>
                <el-button type="danger" plain @click="resetForm(endRef)" size="large">重置</el-button>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { Ref, reactive, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';

const endRef: Ref<FormInstance | undefined> = ref()
const loading: Ref<boolean> = ref(false)
const postData = reactive({
    url: '',
    vercel: ''
})
const route = useRouter();
const rules: FormRules = reactive({
    url: [
        { required: true, message: '请输入github仓库url', trigger: 'blur' }
    ],
    vercel: [
        { required: true, message: '请输入Vercel在线体验地址', trigger: 'blur' }
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
            route.push('/')
        }
    })
}
</script>

<style scoped lang="less">
.main {
    height: 100vh;
    background-color: #D8EACE;
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