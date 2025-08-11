<template>
    <!--
        表单项组件模板
        功能特性：
        1. 表单项布局管理（标签 + 内容区域）
        2. 验证状态显示（错误状态样式）
        3. 错误信息展示
        4. 响应式标签宽度设置
    -->
    <!-- 表单项容器，根据验证状态添加错误类名 -->
    <div class="he-form-item" :class="{'is-error': validateState === 'error'}">
        <!-- 表单项标签 -->
        <label class="he-form-item_label" :style="labelStyle"> {{ label }}</label>
        <!-- 表单项内容区域 -->
        <div class="he-form-item_content">
            <!-- 插槽：表单控件内容 -->
            <slot></slot>
            <!-- 验证错误信息显示 -->
            <div class="he-form-item_error" v-if="validateState === 'error' && showMessage && validateMessage">
                {{ validateMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import AsyncValidator from 'async-validator'

export default {
    name:'HeFormItem',
    inject:['form'],
    /**
     * 组件属性定义
     */
    props:{
        /**
         * @description 显示在表单控件前的标签文字
         */
        label:{
            type:String,
            default:''
        },
        /**
         * 标签宽度
         * @description 当前表单项标签的宽度，会覆盖 form 组件的 labelWidth
         */
        labelWidth:{
            type:String,
            default:'30px'
        },
        /**
         * 表单域 model 字段
         * @type {String}
         * @description 对应表单数据对象中的字段名，用于验证和重置
         * @example 'username' 对应 model.username
         */
        prop:{
            type:String
        },
        /**
         * @description 当前字段的验证规则，会与 form 组件的 rules 合并
         * @example [{ required: true, message: '请输入内容', trigger: 'blur' }]
         */
        rules:{
            type:[Object, Array]
        },
        /**
         * 是否显示校验错误信息
         * @type {Boolean}
         * @default true
         * @description 控制验证失败时是否显示错误提示信息
         */
        showMessage:{
            type:Boolean,
            default:true
        }
    },
    /**
     * 组件数据
     */
    data(){
        return{
            /**
             * @description 当前字段的验证状态：'success'(成功), 'error'(失败), 'validating'(验证中), ''(未验证)
             */
            validateState:'',
            /**
             * @description 验证失败时显示的错误提示文本
             */
            validateMessage:'',
            /**
             * 验证防抖控制
             * @description 防止频繁验证的标志位，实现防抖效果
             */
            validateDisabled:false,
            /**
             * @description 保存字段的初始值，用于表单重置功能
             */
            initialValue:undefined
        }
    },
    computed:{
        //  * 标签样式
        labelStyle(){
            return{
                width:this.form.labelWidth
            }
        },
        /**
         * @description 通过 prop 路径从 form.model 中获取对应字段的值，支持冒号分隔的路径格式
         */
        fieldValue(){
            const model = this.form.model
            console.log(model);
            
            if(!model || !this.prop) return
            
            let path = this.prop
            if(path.indexOf(':') !== -1){
                path = path.replace(/:/, '.')
            }
            return this.getPropByPath(model, path, true).v
        },
        //  * @description 获取当前字段的验证规则，合并 form 组件的 rules、当前组件的 rules 和 required 规则
        getRules(){
            let formRules = this.form.rules
            const selfRules = this.rules
            const requiredRule = this.required !== undefined ? { required: !!this.required } : []
            
            const prop = this.getPropByPath(formRules, this.prop || '')
            formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : []
            
            return [].concat(selfRules || formRules || []).concat(requiredRule)
        }
    },
    watch:{
        'form.model'(){
            this.validate('change')
        }
    },
    //  * 组件挂载后的初始化
    mounted(){
        console.log(this.prop);
        
        if(this.prop){
            // 将当前表单项添加到父表单的管理列表中
            this.form.addField(this)
            
            // 保存字段的初始值，用于重置功能
            this.initialValue = this.fieldValue
            
            // 设置验证规则和事件监听
            this.setRules()
        }
    },
    //  * 组件卸载前的清理
    beforeUnmount(){
        // 从父表单的管理列表中移除当前表单项
        this.form.removeField(this);
    },
    methods:{
        //  * 设置验证规则
        setRules(){
            const rules = this.getRules
            if(rules.length || this.required !== undefined){
                // 验证规则已设置，等待input组件直接调用验证方法
            }
        },
        /**
         * 根据路径获取对象属性
         * @param {Object} obj - 目标对象
         * @param {String} path - 属性路径，支持点分隔和数组索引
         * @param {Boolean} strict - 严格模式，路径不存在时是否抛出错误
         * @returns {Object} 包含对象引用(o)、键名(k)、值(v)的对象
         * @description 支持深层对象属性访问，如 'user.profile.name' 或 'items[0].title'
         * @example
         * getPropByPath({user: {name: 'John'}}, 'user.name') // {o: {name: 'John'}, k: 'name', v: 'John'}
         */
        getPropByPath(obj, path, strict){
            let tempObj = obj
            path = path.replace(/\[(\w+)\]/g, '.$1')
            path = path.replace(/^\./, '')
            
            const keyArr = path.split('.')
            let i = 0
            for(let len = keyArr.length; i < len - 1; ++i){
                if(!tempObj && !strict) break
                const key = keyArr[i]
                if(key in tempObj){
                    tempObj = tempObj[key]
                } else {
                    if(strict){
                        throw new Error('please transfer a valid prop path to form item!')
                    }
                    break
                }
            }
            return {
                o: tempObj,
                k: keyArr[i],
                v: tempObj ? tempObj[keyArr[i]] : null
            }
        },
        /**
         * 验证字段
         * @param {String} trigger - 触发验证的事件类型（blur、change等）
         * @param {Function} callback - 验证完成后的回调函数
         * @description 对当前字段进行异步验证，使用 AsyncValidator 库
         * @example
         * this.validate('blur', (message, invalidFields) => {
         *   if (message) {
         *     console.log('验证失败:', message)
         *   } else {
         *     console.log('验证通过')
         *   }
         * })
         */
        validate(trigger, callback = () => {}){
            // 重置防抖标志
            this.validateDisabled = false
            // 获取符合触发条件的验证规则
            const rules = this.getFilteredRule(trigger)
            
            // 如果没有规则且不是必填，直接通过验证
            if((!rules || rules.length === 0) && this.required === undefined){
                callback()
                return true
            }
            
            // 设置验证状态为进行中
            this.validateState = 'validating'
            
            // 构建验证描述符
            const descriptor = {}
            if(rules && rules.length > 0){
                rules.forEach(rule => {
                    delete rule.trigger  // 移除 trigger 属性，避免 AsyncValidator 报错
                })
            }
            descriptor[this.prop] = rules
            
            // 创建验证器实例
            const validator = new AsyncValidator(descriptor)
            const model = {}
            
            model[this.prop] = this.fieldValue
            console.log(this.fieldValue);
            
            
            // 执行异步验证
            validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
                this.validateState = !errors ? 'success' : 'error'
                this.validateMessage = errors ? errors[0].message : ''
                
                // 执行回调并触发表单验证事件
                callback(this.validateMessage, invalidFields)
                this.form && this.form.$emit && this.form.$emit('validate', this.prop, !errors, this.validateMessage || null)
            })
        },
        /**
         * 清除验证状态
         * @description 清除当前字段的验证状态、错误信息和防抖标志
         */
        clearValidate(){
            this.validateState = ''
            this.validateMessage = ''
            this.validateDisabled = false
        },
        /**
         * 重置字段
         * @description 将字段值重置为初始值，并清除验证状态
         * @example
         * this.resetField() // 重置当前字段到初始状态
         */
        resetField(){
            // 清除验证状态和错误信息
            this.validateState = ''
            this.validateMessage = ''
            
            const model = this.form.model
            const value = this.fieldValue
            let path = this.prop
            
            // 处理冒号分隔的路径格式
            if(path.indexOf(':') !== -1){
                path = path.replace(/:/, '.')
            }
            
            // 获取属性路径信息
            const prop = this.getPropByPath(model, path, true)
            
            // 启用防抖，避免重置时触发验证
            this.validateDisabled = true
            
            // 根据值类型进行重置
            if(Array.isArray(value)){
                prop.o[prop.k] = [].concat(this.initialValue)  // 数组类型：创建新数组
            } else {
                prop.o[prop.k] = this.initialValue  // 其他类型：直接赋值
            }
            
            // 下一个 tick 后关闭防抖
            this.$nextTick(() => {
                this.validateDisabled = false
            })
        },
        /**
         * 获取过滤后的验证规则
         * @param {String} trigger - 触发事件类型
         * @returns {Array} 符合触发条件的验证规则数组
         * @description 根据触发事件过滤验证规则，支持单个触发器和触发器数组
         */
        getFilteredRule(trigger){
            const rules = this.getRules
            
            return rules.filter(rule => {
                // 没有指定触发器或触发器为空时，应用所有规则
                if(!rule.trigger || trigger === '') return true
                // 支持触发器数组
                if(Array.isArray(rule.trigger)){
                    return rule.trigger.indexOf(trigger) > -1
                } else {
                    return rule.trigger === trigger
                }
            }).map(rule => Object.assign({}, rule))  // 创建规则副本，避免修改原始规则
        },
        /**
         * 字段失焦验证处理
         * @description 当表单字段失去焦点时触发验证
         */
        onFieldBlur(){
            this.validate('blur')
        },
        /**
         * 字段值改变验证处理
         * @description 当表单字段值发生变化时触发验证，支持防抖控制
         */
        onFieldChange(){
            // 如果验证被禁用（如重置时），则跳过验证
            if(this.validateDisabled){
                this.validateDisabled = false
                return
            }
            
            this.validate('change')
        }
    }
}
</script>

<!--
    表单项组件样式
    功能说明：
    1. 表单项整体布局和间距
    2. 标签样式（右对齐、浮动布局）
    3. 内容区域样式
    4. 错误状态样式
    5. 错误信息提示样式
-->
<style lang="scss" scoped>
  .he-form-item{
    /* 表单项容器 - 设置底部间距 */
    margin-bottom: 25px;
    
    /* 表单项标签样式 */
    .he-form-item_label{
      text-align: right;          /* 标签文字右对齐 */
      vertical-align: middle;     /* 垂直居中对齐 */
      float: left;               /* 左浮动布局 */
      font-size: 14px;           /* 字体大小 */
      color: #606266;            /* 标签文字颜色 */
      line-height: 40px;         /* 行高，与表单控件高度一致 */
      padding: 0 12px 0 0;       /* 右侧内边距，与内容区域分离 */
      box-sizing: border-box;    /* 盒模型计算方式 */
    }
    
    /* 表单项内容区域 */
    .he-form-item_content{
      line-height: 40px;         /* 行高设置 */
      position: relative;        /* 相对定位，为错误信息绝对定位提供参考 */
      font-size: 14px;          /* 字体大小 */
      /* overflow: hidden;         隐藏溢出内容 - 注释掉以显示错误信息 */
    }
    
    /* 错误信息提示样式 */
    .he-form-item_error{
      color: #f56c6c;           /* 错误文字颜色 */
      font-size: 12px;          /* 较小的字体大小 */
      line-height: 1;           /* 紧凑的行高 */
      padding-top: 4px;         /* 顶部间距 */
      position: absolute;       /* 绝对定位 */
      top: 100%;               /* 位于内容区域下方 */
      left: 0;                 /* 左对齐 */
    }
    
    /* 错误状态样式 */
    &.is-error{
      .he-input input{
        border-color: #f56c6c;    /* 错误状态下输入框边框颜色 */
      }
    }
  }
</style>