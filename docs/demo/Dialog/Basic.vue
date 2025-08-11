<script setup>
import { ref } from 'vue'
import HeDialog from '@/components/dialog.vue'
import HeButton from '@/components/button.vue'

const visible = ref(false)

const openDialog = () => {
  visible.value = true
}

const closeDialog = () => {
  visible.value = false
}
</script>

<template>
  <div class="demo-dialog">
    <he-button @button-click="openDialog">显示对话框</he-button>
    
    <he-dialog v-model:visible="visible" title="温馨提示">
      <p>这是一段信息</p>
      <p>这是另一段信息</p>
      
      <template #footer>
        <he-button @button-click="closeDialog">取消</he-button>
        <he-button type="primary" @button-click="closeDialog">确定</he-button>
      </template>
    </he-dialog>
  </div>
</template>

<style scoped>
.demo-dialog {
  padding: 20px;
}
</style>