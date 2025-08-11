---
title: Notification 通知
description: Notification 通知组件文档
---

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

适用性广泛的通知栏

<preview path="../demo/Notification/Basic.vue" title="基础用法" description="Notification 组件提供通知功能，Heer UI 注册了 $notify 方法，接收一个 options 字面量参数"></preview>

## 带有倾向性

带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息

<preview path="../demo/Notification/Type.vue" title="带有倾向性" description="Heer UI 为 Notification 组件准备了四种通知类型：success, warning, info, error"></preview>

## 自定义弹出位置

可以让 Notification 从屏幕四角中的任意一角弹出

<preview path="../demo/Notification/Position.vue" title="自定义弹出位置" description="使用 position 属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为 top-right"></preview>

## 带有偏移

让 Notification 偏移一些位置

<preview path="../demo/Notification/Offset.vue" title="带有偏移" description="Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距离屏幕边缘偏移一段距离"></preview>

## API

### Notification Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题 | string | — | — |
| message | 说明文字 | string / Vue.VNode | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| type | 主题样式，如果不在可选值内将被忽略 | string | success / warning / info / error | — |
| iconClass | 自定义图标的类名。若设置了 type，则 iconClass 会被覆盖 | string | — | — |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间，毫秒。设为 0 则不会自动关闭 | number | — | 4500 |
| position | 自定义弹出位置 | string | top-right / top-left / bottom-right / bottom-left | top-right |
| showClose | 是否显示关闭按钮 | boolean | — | true |
| onClose | 关闭时的回调函数 | function | — | — |
| onClick | 点击 Notification 时的回调函数 | function | — | — |
| offset | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number | — | 0 |

### Notification Methods

调用 `Notification` 或 `this.$notify` 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。

| 方法名 | 说明 |
| --- | --- |
| close | 关闭当前的 Notification |

### 全局方法

Heer UI 为 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 Notification。

### 单独引用

单独引入 Notification：

```javascript
import { Notification } from 'heer-ui'
```

此时调用方法为 `Notification(options)`。我们也为每个 type 定义了各自的方法，如 `Notification.success(options)`。并且可以调用 `Notification.closeAll()` 手动关闭所有实例。