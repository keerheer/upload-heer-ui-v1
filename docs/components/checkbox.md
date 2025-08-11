---
title: Checkbox 复选框
description: Checkbox 复选框组件文档
---

# Checkbox 复选框

一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<preview path="../demo/Checkbox/Basic.vue" title="基础用法" description="在 he-checkbox 元素中定义 v-model 绑定变量，单一的 checkbox 中，默认绑定变量的值会是 Boolean，选中为 true"></preview>

## 禁用状态

多选框不可用状态。

<preview path="../demo/Checkbox/Disabled.vue" title="禁用状态" description="设置 disabled 属性即可"></preview>

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | string / number / boolean | — | — |
| label | 选中状态的值（只有在 checkbox-group 或者绑定对象类型为 array 时有效） | string / number / boolean | — | — |
| disabled | 是否禁用 | boolean | — | false |
| name | 原生 name 属性 | string | — | — |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | (value: string \| number \| boolean) |

### Checkbox Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义默认内容 |