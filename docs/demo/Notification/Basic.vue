<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Notification } from '@/utils/notification.js'

const showNotification = () => {
  Notification({
    title: '标题名称',
    message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
  })
}

const showSimpleNotification = () => {
  Notification({
    title: '提示',
    message: '这是一条不会自动关闭的消息',
    duration: 0
  })
}

const showCustomNotification = () => {
  Notification({
    title: '自定义',
    message: '这是一条自定义的消息',
    duration: 2000
  })
}
</script>

<template>
  <div class="demo-notification">
    <he-button @button-click="showNotification">可自动关闭</he-button>
    <he-button @button-click="showSimpleNotification">不会自动关闭</he-button>
    <he-button @button-click="showCustomNotification">自定义时长</he-button>
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