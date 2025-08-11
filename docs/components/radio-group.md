---
title: RadioGroup 单选框组
description: RadioGroup 单选框组组件文档
---

# RadioGroup 单选框组

适用于在多个互斥的选项中选择的场景。

## 基础用法

结合 `he-radio-group` 元素和子元素 `he-radio` 可以实现单选组，在 `he-radio-group` 中绑定 `v-model`，在 `he-radio` 中设置好 `label` 即可，无需再给每一个 `he-radio` 绑定变量，另外，还提供了 `change` 事件来响应变化，它会传入一个参数 `value`。

<preview path="../demo/RadioGroup/Basic.vue" title="基础用法" description="RadioGroup 的基础用法"></preview>

## 禁用状态

单选框组不可用的状态。

<preview path="../demo/RadioGroup/Disabled.vue" title="禁用状态" description="在 RadioGroup 上设置 disabled 属性可以禁用整个单选框组"></preview>

## API

### RadioGroup Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | string / number / boolean | — | — |
| disabled | 是否禁用 | boolean | — | false |
| name | 原生 name 属性 | string | — | — |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 绑定值变化时触发的事件 | (value: string \| number \| boolean) |

### RadioGroup Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义默认内容 |