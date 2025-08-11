<script setup>
import { ref } from 'vue'
import HeRadioGroup from '@/components/radio-group.vue'
import HeRadio from '@/components/radio.vue'

const disabledValue = ref('1')
</script>

<template>
  <div class="demo-radio-group">
    <div class="radio-group-row">
      <he-radio-group v-model="disabledValue" disabled>
        <he-radio label="1">选项一（禁用）</he-radio>
        <he-radio label="0">选项二（禁用）</he-radio>
      </he-radio-group>
    </div>
    <p>选中的值：{{ disabledValue }}</p>
  </div>
</template>

<style scoped>
.demo-radio-group {
  padding: 20px;
}

.radio-group-row {
  margin-bottom: 20px;
}
</style>