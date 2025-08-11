---
layout: home

hero:
  name: "Heer UI"
  text: "Vue 3 组件库"
  tagline: 简洁、易用、高效的 Vue 3 组件库
  actions:
    - theme: brand
      text: 快速开始
      link: /components/button
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/keerheer/upload-heer-ui-v1

features:
  - title:  Vue 3 支持
    details: 基于 Vue 3 Composition API 开发，享受最新的 Vue 特性
  - title:  开箱即用
    details: 提供丰富的基础组件，满足日常开发需求
  - title:  简洁设计
    details: 简洁美观的设计风格，易于集成到各种项目中
  - title:  响应式
    details: 支持多种尺寸和设备，适配移动端和桌面端
---

## 快速开始

### 安装

```bash
npm install heer-ui
```

### 使用

```javascript
import { createApp } from 'vue'
import HeerUI from 'heer-ui'
import 'heer-ui/dist/style.css'

const app = createApp(App)
app.use(HeerUI)
app.mount('#app')
```

## 组件预览

Heer UI 提供了丰富的组件，包括：

- **基础组件**：按钮、输入框、开关等
- **表单组件**：单选框、复选框、表单等
- **反馈组件**：对话框等

立即开始使用 [按钮组件](/components/button) 体验 Heer UI 的强大功能！