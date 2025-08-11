<script setup>
import { ref } from 'vue'
import HeRadio from '@/components/radio.vue'

const gender = ref('1')
</script>

<template>
  <div class="demo-radio">
    <div class="radio-row">
      <he-radio label="1" v-model="gender" name="性别">男</he-radio>
      <he-radio label="0" v-model="gender" name="性别">女</he-radio>
    </div>
    <p>选中的值：{{ gender === '1' ? '男' : '女' }}</p>
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