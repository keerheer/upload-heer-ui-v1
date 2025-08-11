---
title: Form 表单
description: Form 表单组件文档
---

# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

## 基础用法

最基础的表单包括各种输入表单项，比如 `input`、`select`、`radio`、`checkbox` 等。

<preview path="../demo/Form/Basic.vue" title="基础用法" description="在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch 等"></preview>

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

<preview path="../demo/Form/Validate.vue" title="表单验证" description="Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可"></preview>

## API

### Form Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model | 表单数据对象 | object | — | — |
| rules | 表单验证规则 | object | — | — |
| labelWidth | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值 | string | — | — |
| labelPosition | 表单域标签的位置 | string | right/left/top | right |

### Form Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| validate | 对整个表单进行校验的方法 | Function(callback: Function(boolean, object)) |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | — |

### FormItem Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 标签文本 | string | — | — |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | — | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules | 表单验证规则 | object / array | — | — |
| labelWidth | 表单域标签的的宽度，例如 '50px' | string | — | — |