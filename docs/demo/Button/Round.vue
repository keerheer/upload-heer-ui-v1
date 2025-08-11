<script setup>
import HeButton from '@/components/button.vue'
</script>

<template>
  <div class="demo-button">
    <div class="button-row">
      <he-button plain round type="primary">主要按钮</he-button>
      <he-button plain round type="success">成功按钮</he-button>
      <he-button plain round type="info">信息按钮</he-button>
      <he-button plain round type="warning">警告按钮</he-button>
      <he-button plain round type="danger">危险按钮</he-button>
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