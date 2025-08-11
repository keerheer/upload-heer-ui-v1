<script setup>
import { ref } from 'vue'
import HeSwitch from '@/components/switch.vue'

const switchValue1 = ref(true)
const switchValue2 = ref(false)
</script>

<template>
  <div class="demo-switch">
    <div class="switch-row">
      <he-switch 
        v-model="switchValue1"
        active-color="green"
        inactive-color="red"
      />
      <span class="switch-label">绿色/红色</span>
    </div>
    <div class="switch-row">
      <he-switch 
        v-model="switchValue2"
        active-color="#13ce66"
        inactive-color="#ff4949"
      />
      <span class="switch-label">自定义颜色</span>
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