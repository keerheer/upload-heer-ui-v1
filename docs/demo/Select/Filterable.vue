<template>
  <div class="demo-select">
    <he-select 
      v-model="value" 
      :options="options" 
      placeholder="请输入关键词搜索" 
      filterable
      @change="handleChange"
    ></he-select>
    <p style="margin-top: 10px;">选中的值: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'SelectFilterable',
  data() {
    return {
      value: '',
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
        { label: 'Date', value: 'date' },
        { label: 'Elderberry', value: 'elderberry' },
        { label: 'Fig', value: 'fig' },
        { label: 'Grape', value: 'grape' },
        { label: 'Honeydew', value: 'honeydew' }
      ]
    }
  },
  methods: {
    handleChange(value, option) {
      console.log('选择器值改变:', value, option)
    }
  }
}
</script>

<style scoped>
.demo-select {
  width: 240px;
}
</style>