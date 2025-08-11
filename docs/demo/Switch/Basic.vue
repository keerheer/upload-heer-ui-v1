<script setup>
import { ref } from 'vue'
import HeSwitch from '@/components/switch.vue'

const switchValue = ref(false)
</script>

<template>
  <div class="demo-switch">
    <div class="switch-row">
      <he-switch v-model="switchValue" />
    </div>
    <p>开关状态：{{ switchValue ? '开启' : '关闭' }}</p>
  </div>
</template>

<style scoped>
.demo-switch {
  padding: 20px;
}

.switch-row {
  margin-bottom: 20px;
}
</style>