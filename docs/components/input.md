---
title: Input 输入框
description: Input 输入框组件文档
---

# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

基础的输入框用法。

<preview path="../demo/Input/Basic.vue" title="基础用法" description="基础的输入框用法"></preview>

## 密码输入框

使用 `type="password"` 和 `showPassword` 属性来创建密码输入框。

<preview path="../demo/Input/Password.vue" title="密码输入框" description="密码输入框支持显示/隐藏密码"></preview>

## 可清空

使用 `clear` 属性即可得到一个可清空的输入框。

<preview path="../demo/Input/Clear.vue" title="可清空" description="可清空的输入框"></preview>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

<preview path="../demo/Input/Disabled.vue" title="禁用状态" description="禁用状态的输入框"></preview>

## API

### Input Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | string / number | — | — |
| type | 类型 | string | text / password | text |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 禁用 | boolean | — | false |
| clear | 是否可清空 | boolean | — | false |
| showPassword | 是否显示切换密码图标 | boolean | — | false |
| name | 原生属性 | string | — | — |

### Input Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| blur | 在 Input 失去焦点时触发 | (event: Event) |