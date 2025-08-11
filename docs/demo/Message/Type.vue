<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Message } from '@/utils/message.js'

const showSuccess = () => {
  Message.success('恭喜你，这是一条成功消息')
}

const showWarning = () => {
  Message.warning('警告哦，这是一条警告消息')
}

const showInfo = () => {
  Message.info('这是一条消息提示')
}

const showError = () => {
  Message.error('错了哦，这是一条错误消息')
}
</script>

<template>
  <div class="demo-message">
    <he-button @button-click="showSuccess">成功</he-button>
    <he-button @button-click="showWarning">警告</he-button>
    <he-button @button-click="showInfo">消息</he-button>
    <he-button @button-click="showError">错误</he-button>
  </div>
</template>

<style scoped>
.demo-message {
  padding: 20px;
}

.he-button {
  margin-right: 10px;
}
</style>