<template>
  <div class="demo-select">
    <he-select 
      v-model="value" 
      :options="options" 
      placeholder="禁用状态" 
      disabled
    ></he-select>
    <p style="margin-top: 10px;">选中的值: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'SelectDisabled',
  data() {
    return {
      value: 'beijing',
      options: [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳', value: 'shenzhen' },
        { label: '杭州', value: 'hangzhou' }
      ]
    }
  }
}
</script>

<style scoped>
.demo-select {
  width: 240px;
}
</style>