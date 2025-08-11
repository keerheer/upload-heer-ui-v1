<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Notification } from '@/utils/notification.js'

const showSuccess = () => {
  Notification.success({
    title: '成功',
    message: '这是一条成功的提示消息'
  })
}

const showWarning = () => {
  Notification.warning({
    title: '警告',
    message: '这是一条警告的提示消息'
  })
}

const showInfo = () => {
  Notification.info({
    title: '消息',
    message: '这是一条消息的提示消息'
  })
}

const showError = () => {
  Notification.error({
    title: '错误',
    message: '这是一条错误的提示消息'
  })
}
</script>

<template>
  <div class="demo-notification">
    <he-button @button-click="showSuccess">成功</he-button>
    <he-button @button-click="showWarning">警告</he-button>
    <he-button @button-click="showInfo">消息</he-button>
    <he-button @button-click="showError">错误</he-button>
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