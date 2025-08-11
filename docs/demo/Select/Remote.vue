<template>
  <div class="demo-select">
    <he-select 
      v-model="value" 
      :options="options" 
      placeholder="请输入关键词进行远程搜索" 
      filterable
      remote
      :remote-method="remoteSearch"
      :debounce-delay="500"
      @change="handleChange"
    ></he-select>
    <p style="margin-top: 10px;">选中的值: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'SelectRemote',
  data() {
    return {
      value: '',
      options: []
    }
  },
  methods: {
    handleChange(value, option) {
      console.log('选择器值改变:', value, option)
    },
    // 模拟远程搜索方法
    async remoteSearch(query) {
      console.log('远程搜索:', query)
      
      // 模拟API请求延迟
      return new Promise((resolve) => {
        setTimeout(() => {
          // 模拟根据查询条件返回不同的数据
          const allData = [
            { label: '远程数据1 - ' + query, value: 'remote1_' + query },
            { label: '远程数据2 - ' + query, value: 'remote2_' + query },
            { label: '远程数据3 - ' + query, value: 'remote3_' + query },
            { label: '远程数据4 - ' + query, value: 'remote4_' + query },
            { label: '远程数据5 - ' + query, value: 'remote5_' + query }
          ]
          
          // 如果查询为空，返回默认数据
          if (!query) {
            resolve([
              { label: '默认选项1', value: 'default1' },
              { label: '默认选项2', value: 'default2' },
              { label: '默认选项3', value: 'default3' }
            ])
          } else {
            // 根据查询条件过滤数据
            const filteredData = allData.filter(item => 
              item.label.toLowerCase().includes(query.toLowerCase())
            )
            resolve(filteredData)
          }
        }, 800) // 模拟800ms的网络延迟
      })
    }
  }
}
</script>

<style scoped>
.demo-select {
  width: 240px;
}
</style>