---
title: Switch 开关
description: Switch 开关组件文档
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

<preview path="../demo/Switch/Basic.vue" title="基础用法" description="基础的开关用法"></preview>

## 自定义颜色

设置 `active-color` 和 `inactive-color` 属性，自定义开关的颜色。

<preview path="../demo/Switch/Color.vue" title="自定义颜色" description="自定义开关激活和非激活状态的颜色"></preview>

## 不同尺寸

设置 `size` 属性，控制开关的大小。

<preview path="../demo/Switch/Size.vue" title="不同尺寸" description="提供大、默认两种尺寸"></preview>

## 禁用状态

设置 `disabled` 属性，禁用开关。

<preview path="../demo/Switch/Disabled.vue" title="禁用状态" description="禁用状态的开关"></preview>

## API

### Switch Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| size | 开关的大小 | string | large / default | default |
| active-color | switch 打开时的背景色 | string | — | #409EFF |
| inactive-color | switch 关闭时的背景色 | string | — | #C0CCDA |
| name | switch 对应的 name 属性 | string | — | — |

### Switch Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | switch 状态发生变化时的回调函数 | (value: boolean) |