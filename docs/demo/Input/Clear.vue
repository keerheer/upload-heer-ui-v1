<script setup>
import { ref } from 'vue'
import HeInput from '@/components/input.vue'

const clearValue = ref('可以清空我')
</script>

<template>
  <div class="demo-input">
    <div class="input-row">
      <he-input 
        v-model="clearValue" 
        placeholder="请输入内容" 
        type="text" 
        name="clearInput"
        :clear="true"
      />
    </div>
    <p>输入的内容：{{ clearValue }}</p>
  </div>
</template>

<style scoped>
.demo-input {
  padding: 20px;
}

.input-row {
  margin-bottom: 20px;
}

.he-input {
  width: 280px;
}
</style>