<script setup>
import { ref } from 'vue'
import HeCheckboxGroup from '@/components/checkbox-group.vue'
import HeCheckbox from '@/components/checkbox.vue'

const checkboxGroup = ref(['吃饭', '睡觉'])
</script>

<template>
  <div class="demo-checkbox-group">
    <div class="checkbox-group-row">
      <he-checkbox-group v-model="checkboxGroup">
        <he-checkbox label="吃饭">吃饭</he-checkbox>
        <he-checkbox label="睡觉">睡觉</he-checkbox>
        <he-checkbox label="打游戏">打游戏</he-checkbox>
      </he-checkbox-group>
    </div>
    <p>选中的值：{{ checkboxGroup.join(', ') || '无' }}</p>
  </div>
</template>

<style scoped>
.demo-checkbox-group {
  padding: 20px;
}

.checkbox-group-row {
  margin-bottom: 20px;
}
</style>