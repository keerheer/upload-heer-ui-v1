<!--
  Form 表单组件
  功能特性：
  1. 表单数据管理和双向绑定
  2. 表单验证（支持同步和异步验证）
  3. 表单项统一管理
  4. 事件总线机制
  5. 表单重置和清除验证
-->
<template>
<!-- 表单容器，使用插槽承载表单项 -->
<div class="he-form">
  <!-- 插槽：用于放置 he-form-item 组件 -->
  <slot></slot>
</div>
</template>

<script>
/**
 * Form 表单组件
 * 提供表单数据管理、验证、重置等功能
 * 通过 provide/inject 机制与 form-item 组件通信
 */
export default {
    name:'HeForm',
    /**
     * 向子组件提供依赖注入
     * 提供表单实例和事件总线，供 form-item 组件使用
     */
    provide(){
        return{
            // 提供表单实例，供子组件访问表单的属性和方法
            form:this
        }
    },
    props:{

        labelWidth:{
            type:String,
            default:'30px'
        },
        /**
         * 表单数据对象
         * @type {Object}
         * @required true
         * @description 表单绑定的数据模型，包含所有表单字段的值
         * @example { username: '', password: '', email: '' }
         */
        model:{
            type:Object,
            required:true,
            default:()=>({})
        },
        /**
         * 表单验证规则
         * @type {Object}
         * @description 定义各个字段的验证规则，键为字段名，值为规则数组
         * @example {
         *   username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
         *   email: [{ type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }]
         * }
         */
        rules:{
            type:Object,
            default:()=>({})
        }
    },
    /**
     * 组件数据
     */
    data(){
        return{
            /**
             * 存储所有表单项实例
             * @type {Array}
             * @description 保存所有 form-item 组件的引用，用于统一管理和验证
             */
            fields:[]
        }
    },
    /**
     * 组件方法
     */
    methods:{
        /**
         * 添加表单项到管理列表
         * @param {Object} field - form-item 组件实例
         * @description 当 form-item 组件挂载时调用，将其添加到表单管理列表中
         */
        addField(field){
            this.fields.push(field)
        },
        /**
         * 从管理列表中移除表单项
         * @param {Object} field - form-item 组件实例
         * @description 当 form-item 组件卸载时调用，将其从表单管理列表中移除
         */
        removeField(field){
            const index = this.fields.indexOf(field)
            if(index > -1){
                this.fields.splice(index, 1)
            }
        },
        /**
         * 验证整个表单
         * @param {Function} callback - 验证完成后的回调函数
         * @description 对所有表单项进行验证，收集验证结果
         * @example
         * this.$refs.form.validate((valid, errors) => {
         *   if (valid) {
         *     console.log('表单验证通过')
         *   } else {
         *     console.log('验证失败:', errors)
         *   }
         * })
         */
        validate(callback){
            let valid = true
            let count = 0
            const errors = []
            
            // 如果没有表单项，直接返回验证通过
            if(this.fields.length === 0){
                callback && callback(true, {})
                return true
            }
            
            // 遍历所有表单项进行验证
            this.fields.forEach(field => {
                field.validate('', (message) => {
                    if(message){
                        valid = false
                        errors.push(message)
                    }
                    count++
                    // 所有字段验证完成后执行回调
                    if(count === this.fields.length){
                        callback && callback(valid, errors)
                    }
                })
            })
        },
        /**
         * 重置表单
         * @description 将所有表单项重置为初始值，并清除验证状态
         */
        resetFields(){
            this.fields.forEach(field => {
                field.resetField()
            })
        },
        /**
         * 清除验证结果
         * @param {Array} props - 需要清除验证的字段名数组，不传则清除所有
         * @description 清除指定字段或所有字段的验证状态和错误信息
         */
        clearValidate(props){
            const fields = props ? this.fields.filter(field => props.includes(field.prop)) : this.fields;
            fields.forEach(field => {
                field.clearValidate();
            });
        },

    }
}
</script>

<style lang="scss">

</style>