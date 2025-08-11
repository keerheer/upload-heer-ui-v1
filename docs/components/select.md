# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

<demo src="../demo/Select/Basic.vue"></demo>

## 有禁用选项

在选项中，设定 `disabled` 值为 true，即可禁用该选项

```vue
<template>
  <he-select 
    v-model="value" 
    :options="options" 
    placeholder="请选择"
  ></he-select>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai', disabled: true },
        { label: '广州', value: 'guangzhou' }
      ]
    }
  }
}
</script>
```

## 禁用状态

选择器不可用状态

<demo src="../demo/Select/Disabled.vue"></demo>

## 可清空单选

包含清空按钮，可将选择器清空为初始状态

<demo src="../demo/Select/Clearable.vue"></demo>

## 可搜索

可以利用搜索功能快速查找选项

<demo src="../demo/Select/Filterable.vue"></demo>

## 远程搜索

从服务器搜索数据，输入关键字进行查找

<demo src="../demo/Select/Remote.vue"></demo>

## API

### Select Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model-value / v-model | 绑定值 | string / number | — | — |
| options | 选项数据 | array | — | [] |
| placeholder | 占位符 | string | — | 请选择 |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否可以清空选项 | boolean | — | false |
| filterable | 是否可搜索 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| empty-text | 选项为空时显示的文字 | string | — | 无数据 |
| debounce-delay | 搜索防抖延迟时间(毫秒) | number | — | 300 |

### Select Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值发生变化时触发 | 目前的选中值, 选中的选项对象 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| focus | 当 input 获得焦点时触发 | (event: Event) |
| blur | 当 input 失去焦点时触发 | (event: Event) |

### Option Data Structure

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string | — | — |
| value | 选项的值 | string / number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |