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
    <he-button @button-click="openDialog">显示自定义对话框</he-button>
    
    <he-dialog v-model:visible="visible" width="70%" top="5vh">
      <template #title>
        <h2>自定义标题</h2>
      </template>
      
      <div class="custom-content">
        <h3>自定义内容区域</h3>
        <ul>
          <li>列表项 1</li>
          <li>列表项 2</li>
          <li>列表项 3</li>
        </ul>
        <p>这里可以放置任意的内容，包括表格、表单、图片等。</p>
      </div>
      
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

.custom-content {
  padding: 20px 0;
}

.custom-content h3 {
  margin-top: 0;
  color: #409eff;
}

.custom-content ul {
  margin: 15px 0;
  padding-left: 20px;
}

.custom-content li {
  margin: 8px 0;
}
</style>