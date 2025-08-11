<script setup>
import { ref } from 'vue'
import HeRadio from '@/components/radio.vue'

const disabledValue = ref('1')
</script>

<template>
  <div class="demo-radio">
    <div class="radio-row">
      <he-radio label="1" v-model="disabledValue" name="禁用" disabled>选项一（禁用）</he-radio>
      <he-radio label="0" v-model="disabledValue" name="禁用" disabled>选项二（禁用）</he-radio>
    </div>
    <p>选中的值：{{ disabledValue }}</p>
  </div>
</template>

<style scoped>
.demo-radio {
  padding: 20px;
}

.radio-row {
  margin-bottom: 20px;
}

.radio-row .he-radio {
  margin-right: 20px;
}
</style>