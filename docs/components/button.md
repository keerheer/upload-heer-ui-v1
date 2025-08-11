---
title: Button 按钮
description: Button 按钮组件文档
---

# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。

## 基础用法

基础的按钮用法，通过 `type` 属性设置不同的按钮类型。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="使用 type 属性来定义 Button 的样式"></preview>

## 朴素按钮

朴素按钮同样设置了五种类型，通过设置 `plain` 属性，它们的表现为朴素的按钮样式。

<preview path="../demo/Button/Plain.vue" title="朴素按钮" description="通过 plain 属性设置朴素按钮"></preview>

## 圆角按钮

通过 `round` 属性来设置圆角按钮。

<preview path="../demo/Button/Round.vue" title="圆角按钮" description="通过 round 属性设置圆角按钮"></preview>

## 圆形按钮

通过 `circle` 属性来设置圆形按钮，通常用于图标按钮。

<preview path="../demo/Button/Circle.vue" title="圆形按钮" description="通过 circle 属性设置圆形按钮"></preview>

## 禁用状态

按钮不可用状态，通过 `disabled` 属性来设置按钮的禁用状态。

<preview path="../demo/Button/Disabled.vue" title="禁用状态" description="通过 disabled 属性设置按钮禁用状态"></preview>

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。通过 `icon` 属性设置图标类名。

<preview path="../demo/Button/Icon.vue" title="图标按钮" description="通过 icon 属性设置图标按钮"></preview>

## API

### Button Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | string | primary / success / warning / danger / info | — |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| icon | 图标类名 | string | — | — |

### Button Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| button-click | 点击按钮时触发 | (event: Event) |