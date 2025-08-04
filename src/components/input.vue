<template>
    <!-- 另外 如果没有对应的清空和显示密码图标 就不显示 -->
    <div class="he-input" :class="{'he-input_suffix': showSuffix}">
      <!-- v-model 双向绑定原理就是 :value='xx' @input='xx = $event.target.value' -->
       <!-- :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v3写法 -->
      <input
        class="he-input_inner"
        :class="{'is-disabled': disabled}"
        :placeholder="placeholder"
        :type="showPassword ? (showPasswordVisible ? 'text' : 'password') : type"
        :name="name"
        :disabled="disabled"
        
        :value = 'modelValue' @input = 'handleInput'
  
      />
      <span class="he-input_suffix">
        <i :class="{'he-icon-a-eye-show':showPasswordVisible,'he-icon-a-eye-hidden':!showPasswordVisible}" 
        @click="handleShowPassword" v-if="showPassword && type === 'password'"></i>
        <i class="he-icon-a-close" @click="handleClear" v-if="clear && modelValue"></i> 
      </span>
      <!-- 由于目前没有图标,所以先不管 先写样式 -->
       <!-- 1.清空 当前输入框有值就清空 传过来的是modelValue  (有值且有clear属性)显示小图标 注册清空事件 父组件传过来的所以需要用$emit-->
        <!-- 2.显示密码 当输入框中type是password 需要修改类型  -->
         <!-- 2.逻辑。类型是父传的 子不能直接修改 所以我们在在子组件里面新增一个bool属性来控制显示隐藏 -->
           <!-- showPassword ? (showPasswordVisible ? 'text' : 'password') : type -->
            <!-- 当点击 修改了Visible属性 -->
            <!-- 如果我们传入了 showPassword 表示这是含密码显示隐藏的输入框 -->
             <!-- 如果为真，我们通过showPasswordVisible 来控制显示隐藏 如果Visible为真 我们就显示密码 -->
              <!-- 否则就直接使用传入的属性即可type='type' -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'he-input',
    data(){
      return {
        showPasswordVisible: false
      }
    },
    props: {
      modelValue: {
        type: String,
        default: ''
      },// 注意在v3中,必须使用modelValue来接收
      placeholder: {
        type: String,
        default: '请输入'
      },
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clear: { //清空
        type: Boolean,
        default: false
      },
      showPassword: { //显示密码
        type: Boolean,
        default: false
      }
    },
    methods:{
      handleInput(e){
        this.$emit('update:modelValue', e.target.value) // v3必须使用update:modelValue
      },
      handleClear(){
        this.$emit('update:modelValue', '')//v3必须使用update:modelValue
      },
      handleShowPassword(){
        this.showPasswordVisible = !this.showPasswordVisible
      }
  
    },
    computed: {
      showSuffix() { //复用 用来显示图标样式
        return this.clear || this.showPassword
      }
    }
    
  }
  </script>   
  
  <style lang="scss">
  .he-input{
      width: 100%;
      position: relative;
      font-size: 14px;
      display: inline-block;
      .he-input_inner{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,045,.355,1);
        width: 100%;
   
        &:focus{
          outline: none;
          border-color: #409eff;
        }
        // input禁用样式
        &.is-disabled{
          background-color: #f5f7fa;
          border-color: #e4e7ed;
          color: #c0c4cc;
          cursor:not-allowed;
        }
      }
    }
    .he-input_suffix{
      .he-input_inner{
        padding-right: 30px;
      }
      .he-input_suffix{
        position: absolute;
        right: 10px;
        height: 100%;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i{
          color: #c0c4cc;
          font-size: 14px;
          cursor: pointer;
          transition: color .2s cubic-bezier(.645,.045,.355,1);
        }
      }
    }
  
  </style>