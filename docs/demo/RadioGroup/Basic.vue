<script setup>
import { ref } from 'vue'
import HeRadioGroup from '@/components/radio-group.vue'
import HeRadio from '@/components/radio.vue'

const Array1 = ref({
  gender: '1',
  age: '1',
  is: '1'
})
</script>

<template>
  <div class="demo-radio-group">
    <div class="radio-group-row">
      <he-radio-group v-model="Array1">
        <he-radio label="1">男</he-radio>
        <he-radio label="0">女</he-radio>
        <!-- 第二组 -->
        <he-radio label="1">成年</he-radio>
        <he-radio label="0">未成年</he-radio>
          <!-- 第三组 -->
        <he-radio label="1">自愿</he-radio>
        <he-radio label="0">非自愿</he-radio>
      </he-radio-group>
    </div>
    <p>选中的值：{{ Array1.gender === '1' ? '男' : '女' }}</p>
    <p>选中的值：{{ Array1.age === '1' ? '成年' : '未成年' }}</p>
    <p>选中的值：{{ Array1.is === '1' ? '是' : '否' }}</p>
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