import DefaultTheme from 'vitepress/theme'
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

// 导入组件样式
import '../../../src/assets/fonts/iconfont.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', NaiveUIContainer)
  }
}