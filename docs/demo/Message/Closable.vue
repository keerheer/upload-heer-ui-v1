<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Message } from '@/utils/message.js'

const showClosableMessage = () => {
  Message({
    message: '这是一条可关闭的消息提示',
    showClose: true,
    duration: 0
  })
}

const showClosableSuccess = () => {
  Message.success({
    message: '恭喜你，这是一条可关闭的成功消息',
    showClose: true,
    duration: 0
  })
}

const showClosableError = () => {
  Message.error({
    message: '错了哦，这是一条可关闭的错误消息',
    showClose: true,
    duration: 0
  })
}
</script>

<template>
  <div class="demo-message">
    <he-button @button-click="showClosableMessage">可关闭消息</he-button>
    <he-button @button-click="showClosableSuccess">可关闭成功消息</he-button>
    <he-button @button-click="showClosableError">可关闭错误消息</he-button>
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