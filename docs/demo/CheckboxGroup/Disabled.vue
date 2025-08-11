<script setup>
import { ref } from 'vue'
import HeCheckboxGroup from '@/components/checkbox-group.vue'
import HeCheckbox from '@/components/checkbox.vue'

const disabledGroup = ref(['吃饭'])
</script>

<template>
  <div class="demo-checkbox-group">
    <div class="checkbox-group-row">
      <he-checkbox-group v-model="disabledGroup" disabled>
        <he-checkbox label="吃饭">吃饭（禁用）</he-checkbox>
        <he-checkbox label="睡觉">睡觉（禁用）</he-checkbox>
        <he-checkbox label="打游戏">打游戏（禁用）</he-checkbox>
      </he-checkbox-group>
    </div>
    <p>选中的值：{{ disabledGroup.join(', ') || '无' }}</p>
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