<script setup>
import HeButton from '@/components/button.vue'

const handleClick = () => {
  console.log('按钮被点击了！')
}
</script>

<template>
  <div class="demo-button">
    <div class="button-row">
      <he-button icon="he-icon-a-favorite-full" type="primary" @button-click="handleClick">收藏</he-button>
      <he-button icon="he-icon-a-to-up" type="success">上传</he-button>
      <he-button icon="he-icon-a-aixin" type="info">喜欢</he-button>
      <he-button icon="he-icon-a-select" type="warning">选择</he-button>
      <he-button icon="he-icon-a-back2" type="danger">返回</he-button>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  padding: 20px;
}

.button-row {
  margin-bottom: 20px;
}

.button-row .he-button {
  margin-right: 10px;
}
</style>