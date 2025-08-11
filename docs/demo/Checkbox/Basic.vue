<script setup>
import { ref } from 'vue'
import HeCheckbox from '@/components/checkbox.vue'

const checkboxValue = ref(false)
</script>

<template>
  <div class="demo-checkbox">
    <div class="checkbox-row">
      <he-checkbox v-model="checkboxValue">是否选中</he-checkbox>
    </div>
    <p>选中状态：{{ checkboxValue ? '已选中' : '未选中' }}</p>
  </div>
</template>

<style scoped>
.demo-checkbox {
  padding: 20px;
}

.checkbox-row {
  margin-bottom: 20px;
}
</style>