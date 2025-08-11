<script setup>
import { ref } from 'vue'
import HeForm from '@/components/form.vue'
import HeFormItem from '@/components/form-item.vue'
import HeInput from '@/components/input.vue'
import HeCheckboxGroup from '@/components/checkbox-group.vue'
import HeCheckbox from '@/components/checkbox.vue'

const formModel = ref({
  username: '',
  password: '',
  password1: '',
  hobby: []
})
</script>

<template>
  <div class="demo-form">
    <he-form :model="formModel" labelWidth="100px">
      <he-form-item label="用户名">
        <he-input v-model="formModel.username" placeholder="请输入用户名"></he-input>
      </he-form-item>
      <he-form-item label="密码">
        <he-input type="password" v-model="formModel.password" placeholder="请输入密码"></he-input>
      </he-form-item>
      <he-form-item label="确认密码">
        <he-input type="password" v-model="formModel.password1" placeholder="请输入确认密码"></he-input>
      </he-form-item>
      <he-form-item label="爱好">
        <he-checkbox-group v-model="formModel.hobby">
          <he-checkbox label="吃饭">吃饭</he-checkbox>
          <he-checkbox label="睡觉">睡觉</he-checkbox>
          <he-checkbox label="打游戏">打游戏</he-checkbox>
        </he-checkbox-group>
      </he-form-item>
    </he-form>
    
    <div class="form-data">
      <h4>表单数据：</h4>
      <pre>{{ JSON.stringify(formModel, null, 2) }}</pre>
    </div>
  </div>
</template>

<style scoped>
.demo-form {
  padding: 20px;
}

.form-data {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.form-data pre {
  margin: 0;
  font-size: 12px;
}
</style>