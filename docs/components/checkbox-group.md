---
title: CheckboxGroup 复选框组
description: CheckboxGroup 复选框组组件文档
---

# CheckboxGroup 复选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

## 基础用法

`checkbox-group` 元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可。 `he-checkbox` 的 `label` 属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`label` 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

<preview path="../demo/CheckboxGroup/Basic.vue" title="基础用法" description="CheckboxGroup 的基础用法"></preview>

## 禁用状态

多选框组不可用状态。

<preview path="../demo/CheckboxGroup/Disabled.vue" title="禁用状态" description="在 CheckboxGroup 上设置 disabled 属性可以禁用整个复选框组"></preview>

## API

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | array | — | [] |
| disabled | 是否禁用 | boolean | — | false |
| name | 原生 name 属性 | string | — | — |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | (value: array) |

### CheckboxGroup Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义默认内容 |