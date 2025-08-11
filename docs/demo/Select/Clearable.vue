<template>
  <div class="demo-select">
    <he-select 
      v-model="value" 
      :options="options" 
      placeholder="请选择" 
      clearable
      @change="handleChange"
      @clear="handleClear"
    ></he-select>
    <p style="margin-top: 10px;">选中的值: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'SelectClearable',
  data() {
    return {
      value: '',
      options: [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳', value: 'shenzhen' },
        { label: '杭州', value: 'hangzhou' }
      ]
    }
  },
  methods: {
    handleChange(value, option) {
      console.log('选择器值改变:', value, option)
    },
    handleClear() {
      console.log('选择器已清空')
    }
  }
}
</script>

<style scoped>
.demo-select {
  width: 240px;
}
</style>