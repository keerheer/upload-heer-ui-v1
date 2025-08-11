<script setup>
import { ref } from 'vue'
import HeCheckbox from '@/components/checkbox.vue'

const disabledValue1 = ref(true)
const disabledValue2 = ref(false)
</script>

<template>
  <div class="demo-checkbox">
    <div class="checkbox-row">
      <he-checkbox v-model="disabledValue1" disabled>已选中且禁用</he-checkbox>
    </div>
    <div class="checkbox-row">
      <he-checkbox v-model="disabledValue2" disabled>未选中且禁用</he-checkbox>
    </div>
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