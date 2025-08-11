<script setup>
import { ref } from 'vue'
import HeInput from '@/components/input.vue'

const inputValue = ref('')
</script>

<template>
  <div class="demo-input">
    <div class="input-row">
      <he-input 
        v-model="inputValue" 
        placeholder="请输入内容" 
        type="text" 
        name="username"
      />
    </div>
    <p>输入的内容：{{ inputValue }}</p>
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