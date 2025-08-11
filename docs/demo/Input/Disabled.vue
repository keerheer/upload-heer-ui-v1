<script setup>
import { ref } from 'vue'
import HeInput from '@/components/input.vue'

const disabledValue = ref('禁用状态')
</script>

<template>
  <div class="demo-input">
    <div class="input-row">
      <he-input 
        v-model="disabledValue" 
        placeholder="禁用状态" 
        type="text" 
        name="disabledInput"
        disabled
      />
    </div>
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