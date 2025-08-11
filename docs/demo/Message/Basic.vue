<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Message } from '@/utils/message.js'

const showMessage = () => {
  Message({
    message: '这是一条消息提示',
    duration: 3000
  })
}

const showSimpleMessage = () => {
  Message('这是一条简单的消息提示')
}
</script>

<template>
  <div class="demo-message">
    <he-button @button-click="showMessage">显示消息</he-button>
    <he-button @button-click="showSimpleMessage">显示简单消息</he-button>
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