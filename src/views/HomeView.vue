<template>

  <div class="item">
    <div class="item-logo"><img class="logo" src="../assets/logo.png" /></div>
    <div class="item-font">欢迎来到「流转」线上面试环节，<br />期待你的加入！
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/guide');
  }, 2000);
})

</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -120px;

  .item-logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    padding: 4px;

    .logo {
      border-radius: 20%;
      width: 100%;
    }
  }

  .item-font {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
    animation: itemFont 2s ease-in-out forwards;
  }

  @keyframes itemFont {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }


}
</style>
