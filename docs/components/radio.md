---
title: Radio 单选框
description: Radio 单选框组件文档
---

# Radio 单选框

在一组备选项中进行单选。

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<preview path="../demo/Radio/Basic.vue" title="基础用法" description="要使用 Radio 组件，只需要设置 v-model 绑定变量，选中意味着变量的值为相应 Radio label 属性的值"></preview>

## 禁用状态

单选框不可用的状态。

<preview path="../demo/Radio/Disabled.vue" title="禁用状态" description="只要在 he-radio 元素中设置 disabled 属性即可"></preview>

## API

### Radio Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | string / number / boolean | — | — |
| label | Radio 的 value | string / number / boolean | — | — |
| disabled | 是否禁用 | boolean | — | false |
| name | 原生 name 属性 | string | — | — |

### Radio Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 绑定值变化时触发的事件 | (value: string \| number \| boolean) |