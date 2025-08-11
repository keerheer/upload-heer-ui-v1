<script setup>
import { ref } from 'vue'
import HeForm from '@/components/form.vue'
import HeFormItem from '@/components/form-item.vue'
import HeInput from '@/components/input.vue'
import HeButton from '@/components/button.vue'

const formRef = ref(null)
const formModel = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const submitForm = () => {
  if (formRef.value) {
    formRef.value.validate((valid) => {
      if (valid) {
        alert('提交成功！')
      } else {
        alert('表单验证失败！')
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
  <div class="demo-form">
    <he-form ref="formRef" :model="formModel" :rules="rules" labelWidth="100px">
      <he-form-item label="用户名" prop="username">
        <he-input v-model="formModel.username" placeholder="请输入用户名"></he-input>
      </he-form-item>
      <he-form-item label="密码" prop="password">
        <he-input type="password" v-model="formModel.password" placeholder="请输入密码"></he-input>
      </he-form-item>
      <he-form-item label="确认密码" prop="confirmPassword">
        <he-input type="password" v-model="formModel.confirmPassword" placeholder="请再次输入密码"></he-input>
      </he-form-item>
      <he-form-item>
        <he-button type="primary" @button-click="submitForm">提交</he-button>
        <he-button @button-click="resetForm">重置</he-button>
      </he-form-item>
    </he-form>
  </div>
</template>

<style scoped>
.demo-form {
  padding: 20px;
}

.he-button {
  margin-right: 10px;
}
</style>