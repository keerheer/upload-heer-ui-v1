---
title: Message 消息提示
description: Message 消息提示组件文档
---

# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释"></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

<preview path="../demo/Message/Type.vue" title="不同状态" description="当需要自定义更多属性时，Message 也可以接收一个对象为参数"></preview>

## 可关闭

可以添加关闭按钮。

<preview path="../demo/Message/Closable.vue" title="可关闭" description="默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用 showClose 字段"></preview>

## 文字居中

使用 center 属性让文字水平居中。

<preview path="../demo/Message/Center.vue" title="文字居中" description="使用 center 属性让文字水平居中"></preview>

## API

### Message Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| message | 消息文字 | string / VNode | — | — |
| type | 主题 | string | success / warning / info / error | info |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间，毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| center | 文字是否居中 | boolean | — | false |
| onClose | 关闭时的回调函数，参数为被关闭的 message 实例 | function | — | — |
| offset | Message 距离窗口顶部的偏移量 | number | — | 20 |

### Message Methods

调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。

| 方法名 | 说明 |
| --- | --- |
| close | 关闭当前的 Message |

### 全局方法

Heer UI 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。

### 单独引用

单独引入 Message：

```javascript
import { Message } from 'heer-ui'
```

此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message.success(options)`。并且可以调用 `Message.closeAll()` 手动关闭所有实例。