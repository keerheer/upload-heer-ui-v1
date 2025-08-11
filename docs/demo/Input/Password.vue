<script setup>
import { ref } from 'vue'
import HeInput from '@/components/input.vue'

const password = ref('')
</script>

<template>
  <div class="demo-input">
    <div class="input-row">
      <he-input 
        v-model="password" 
        placeholder="请输入密码" 
        type="password" 
        name="password"
        :showPassword="true"
      />
    </div>
    <p>输入的密码：{{ password }}</p>
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