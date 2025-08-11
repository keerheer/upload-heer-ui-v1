import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: "Heer UI",
  description: "一个基于 Vue 3 的组件库",
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: '按钮 Button', link: '/components/button'},
          { text: '输入框 Input', link: '/components/input'},
          { text: '开关 Switch', link: '/components/switch'}
        ]
      },
      {
        text: '表单组件',
        items: [
          { text: '单选框 Radio', link: '/components/radio'},
          { text: '单选框组 RadioGroup', link: '/components/radio-group'},
          { text: '复选框 Checkbox', link: '/components/checkbox'},
          { text: '复选框组 CheckboxGroup', link: '/components/checkbox-group'},
          { text: '表单 Form', link: '/components/form'}
        ]
      },
      {
        text: '反馈组件',
        items: [
          { text: '对话框 Dialog', link: '/components/dialog'}
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/heer-ui' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})