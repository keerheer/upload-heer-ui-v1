<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Message } from '@/utils/message.js'

const showCenterMessage = () => {
  Message({
    message: '居中的文字',
    center: true
  })
}

const showCenterSuccess = () => {
  Message.success({
    message: '恭喜你，这是一条居中的成功消息',
    center: true
  })
}

const showCenterWarning = () => {
  Message.warning({
    message: '警告哦，这是一条居中的警告消息',
    center: true
  })
}

const showCenterError = () => {
  Message.error({
    message: '错了哦，这是一条居中的错误消息',
    center: true
  })
}
</script>

<template>
  <div class="demo-message">
    <he-button @button-click="showCenterMessage">居中消息</he-button>
    <he-button @button-click="showCenterSuccess">居中成功消息</he-button>
    <he-button @button-click="showCenterWarning">居中警告消息</he-button>
    <he-button @button-click="showCenterError">居中错误消息</he-button>
  </div>
</template>

<style scoped>
.demo-message {
  padding: 20px;
}

.he-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>