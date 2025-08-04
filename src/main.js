import { createApp } from 'vue'
import App from './App.vue'
// 导入字体图标
import './assets/fonts/iconfont.css'    
// 导入burron
import HeButton from '@/components/button.vue'
// 导入dialog
import HeDialog from '@/components/dialog.vue'
// 导入input
import HeInput from '@/components/input.vue'
// 导入switch
import HeSwitch from '@/components/switch.vue'
// 导入radio
import HeRadio from '@/components/radio.vue'
// 导入radio-group
import HeRadioGroup from '@/components/radio-group.vue'
// 导入checkbox
import HeCheckbox from '@/components/checkbox.vue'
// 导入checkbox-group
import HeCheckboxGroup from '@/components/checkbox-group.vue'
// 导入form
import HeForm from '@/components/form.vue'
// 导入form-item
import HeFormItem from '@/components/form-item.vue'

// Vue 3中，应该先注册组件再挂载应用
const app = createApp(App)
// 注册使用 在此处全局注册 所有的组件都可以使用 App.vue中不需要继续注册
app.component(HeButton.name, HeButton)
app.component(HeDialog.name, HeDialog)
app.component(HeInput.name, HeInput)
app.component(HeSwitch.name, HeSwitch)
app.component(HeRadio.name, HeRadio)
app.component(HeRadioGroup.name, HeRadioGroup)   
app.component(HeCheckbox.name, HeCheckbox)
app.component(HeCheckboxGroup.name, HeCheckboxGroup)
app.component(HeForm.name, HeForm)
app.component(HeFormItem.name, HeFormItem)
// 挂载
app.mount('#app')