<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Notification } from '@/utils/notification.js'

const showWithOffset = () => {
  Notification({
    title: '偏移的消息',
    message: '这是一条设置了偏移量的消息',
    offset: 100
  })
}

const showWithLargeOffset = () => {
  Notification.success({
    title: '大偏移量',
    message: '这是一条设置了大偏移量的成功消息',
    offset: 200
  })
}

const showMultipleWithOffset = () => {
  Notification.info({
    title: '消息 1',
    message: '第一条消息',
    offset: 50
  })
  
  setTimeout(() => {
    Notification.warning({
      title: '消息 2',
      message: '第二条消息',
      offset: 50
    })
  }, 500)
  
  setTimeout(() => {
    Notification.error({
      title: '消息 3',
      message: '第三条消息',
      offset: 50
    })
  }, 1000)
}
</script>

<template>
  <div class="demo-notification">
    <he-button @button-click="showWithOffset">偏移的消息</he-button>
    <he-button @button-click="showWithLargeOffset">大偏移量</he-button>
    <he-button @button-click="showMultipleWithOffset">多条偏移消息</he-button>
  </div>
</template>

<style scoped>
.demo-notification {
  padding: 20px;
}

.he-button {
  margin-right: 10px;
}
</style>