<script setup>
import { ref } from 'vue'
import HeSwitch from '@/components/switch.vue'

const switchValue1 = ref(true)
const switchValue2 = ref(false)
</script>

<template>
  <div class="demo-switch">
    <div class="switch-row">
      <he-switch v-model="switchValue1" disabled />
      <span class="switch-label">禁用状态（开启）</span>
    </div>
    <div class="switch-row">
      <he-switch v-model="switchValue2" disabled />
      <span class="switch-label">禁用状态（关闭）</span>
    </div>
  </div>
</template>

<style scoped>
.demo-switch {
  padding: 20px;
}

.switch-row {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.switch-label {
  margin-left: 10px;
}
</style>