---
title: Dialog 对话框
description: Dialog 对话框组件文档
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

<preview path="../demo/Dialog/Basic.vue" title="基础用法" description="需要设置 visible 属性，它接收 Boolean，当为 true 时显示 Dialog"></preview>

## 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单。

<preview path="../demo/Dialog/Custom.vue" title="自定义内容" description="Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上"></preview>

## 嵌套表单

当对话框中嵌套表单时，可以使用具名插槽来自定义页脚按钮。

<preview path="../demo/Dialog/Form.vue" title="嵌套表单" description="在对话框中嵌套表单的示例"></preview>

## API

### Dialog Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model:visible | 是否显示 Dialog | boolean | — | false |
| title | Dialog 的标题，也可通过具名 slot 传入 | string | — | — |
| width | Dialog 的宽度 | string / number | — | 50% |
| top | Dialog CSS 中的 margin-top 值 | string | — | 15vh |
| modal | 是否需要遮罩层 | boolean | — | true |
| closeOnClickModal | 是否可以通过点击 modal 关闭 Dialog | boolean | — | true |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog | boolean | — | true |
| showClose | 是否显示关闭按钮 | boolean | — | true |
| beforeClose | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |

### Dialog Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | Dialog 打开的回调 | — |
| opened | Dialog 打开动画结束时的回调 | — |
| close | Dialog 关闭的回调 | — |
| closed | Dialog 关闭动画结束时的回调 | — |

### Dialog Slots

| 插槽名 | 说明 |
| --- | --- |
| default | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |