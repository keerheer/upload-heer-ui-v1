<script setup>
import { ref } from 'vue'
import HeDialog from '@/components/dialog.vue'
import HeButton from '@/components/button.vue'
import HeForm from '@/components/form.vue'
import HeFormItem from '@/components/form-item.vue'
import HeInput from '@/components/input.vue'

const visible = ref(false)
const formRef = ref(null)
const formModel = ref({
  name: '',
  email: '',
  phone: ''
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' }
  ]
}

const openDialog = () => {
  visible.value = true
}

const closeDialog = () => {
  visible.value = false
  resetForm()
}

const submitForm = () => {
  if (formRef.value) {
    formRef.value.validate((valid) => {
      if (valid) {
        alert('提交成功！')
        closeDialog()
      } else {
        alert('请检查表单信息！')
      }
    })
  }
}

const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields()
  }
}
</script>

<template>
  <div class="demo-dialog">
    <he-button @button-click="openDialog">新增用户</he-button>
    
    <he-dialog v-model:visible="visible" title="新增用户" width="500px">
      <he-form ref="formRef" :model="formModel" :rules="rules" labelWidth="80px">
        <he-form-item label="姓名" prop="name">
          <he-input v-model="formModel.name" placeholder="请输入姓名"></he-input>
        </he-form-item>
        <he-form-item label="邮箱" prop="email">
          <he-input v-model="formModel.email" placeholder="请输入邮箱"></he-input>
        </he-form-item>
        <he-form-item label="手机号" prop="phone">
          <he-input v-model="formModel.phone" placeholder="请输入手机号"></he-input>
        </he-form-item>
      </he-form>
      
      <template #footer>
        <he-button @button-click="closeDialog">取消</he-button>
        <he-button type="primary" @button-click="submitForm">确定</he-button>
      </template>
    </he-dialog>
  </div>
</template>

<style scoped>
.demo-dialog {
  padding: 20px;
}
</style>