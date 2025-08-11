<script setup>
import HeButton from '@/components/button.vue'
</script>

<template>
  <div class="demo-button">
    <div class="button-row">
      <he-button plain icon="he-icon-a-favorite-full" type="primary">主要按钮</he-button>
      <he-button plain icon="he-icon-a-to-up" type="success">成功按钮</he-button>
      <he-button plain icon="he-icon-a-aixin" type="info">信息按钮</he-button>
      <he-button plain icon="he-icon-a-select" type="warning">警告按钮</he-button>
      <he-button plain icon="he-icon-a-back2" type="danger">危险按钮</he-button>
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