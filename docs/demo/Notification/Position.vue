<script setup>
import { ref } from 'vue'
import HeButton from '@/components/button.vue'
import { Notification } from '@/utils/notification.js'

const showTopRight = () => {
  Notification({
    title: '自定义位置',
    message: '右上角弹出的消息',
    position: 'top-right'
  })
}

const showTopLeft = () => {
  Notification({
    title: '自定义位置',
    message: '左上角弹出的消息',
    position: 'top-left'
  })
}

const showBottomRight = () => {
  Notification({
    title: '自定义位置',
    message: '右下角弹出的消息',
    position: 'bottom-right'
  })
}

const showBottomLeft = () => {
  Notification({
    title: '自定义位置',
    message: '左下角弹出的消息',
    position: 'bottom-left'
  })
}
</script>

<template>
  <div class="demo-notification">
    <he-button @button-click="showTopRight">右上角</he-button>
    <he-button @button-click="showTopLeft">左上角</he-button>
    <he-button @button-click="showBottomRight">右下角</he-button>
    <he-button @button-click="showBottomLeft">左下角</he-button>
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