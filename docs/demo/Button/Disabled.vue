<script setup>
import HeButton from '@/components/button.vue'
</script>

<template>
  <div class="demo-button">
    <div class="button-row">
      <he-button disabled type="primary">主要按钮-禁用</he-button>
      <he-button disabled type="success">成功按钮-禁用</he-button>
      <he-button disabled type="info">信息按钮-禁用</he-button>
      <he-button disabled type="warning">警告按钮-禁用</he-button>
      <he-button disabled type="danger">危险按钮-禁用</he-button>
    </div>
    <div class="button-row">
      <he-button plain disabled type="primary">主要按钮-禁用</he-button>
      <he-button plain disabled type="success">成功按钮-禁用</he-button>
      <he-button plain disabled type="info">信息按钮-禁用</he-button>
      <he-button plain disabled type="warning">警告按钮-禁用</he-button>
      <he-button plain disabled type="danger">危险按钮-禁用</he-button>
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