<template>
    <div class="main">
        <div class="main-top">
            <img src="../assets/logo.png" class="main-top-logo">
        </div>
        <div class="main-bottom">
            欢迎来到线上面试环节<br>准备好了吗<br>{{ ellipsis + " " + countdown + " " + ellipsis }}
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, Ref } from 'vue'
import { useRouter } from 'vue-router';

const ellipsis: Ref<string> = ref('······')
const countdown: Ref<number> = ref(3)
const route = useRouter()

onMounted(() => {
    const timer: number = setInterval(() => {
        countdown.value -= 1
        ellipsis.value = ellipsis.value.slice(0, ellipsis.value.length - 3)
        if (countdown.value == 0) {
            clearInterval(timer)
            route.push('/md')
        }
    }, 1000)
})

</script>

<style scoped lang="less">
.main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    text-align: center;

    &-top {
        margin: 30px;

        &-logo {
            width: 100px;
            height: 100px;
            animation: anmt 1.5s linear infinite;

            @keyframes anmt {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        }
    }

    &-bottom {
        line-height: 1.4;
    }
}
</style>