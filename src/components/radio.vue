<template>
    <!-- 结构解析 最外层的是label 用于关联表单控件（如 <input>、<select>、<textarea>），提升用户体验和可访问性-->
        <!-- 第二层 两部分组成两个span  -->
        <!-- 第一部分 是input 用于接收用户的点击事件  两部分 第一部分是一个圆点 第二部分是一个iput-->
        <!-- 第二部分 是label 用于显示文本 -->
 <label class="he-radio" :class="{'is-checked': model === label, 'is-disabled': disabled}">
    <span class="he-radio_input">
      <span class="he-radio_inner"></span>
      <input
      v-if="!disabled"
      type="radio"
      class="he-radio_original" 
      :name="name"
      :value="label" 
      v-model="model"
      >
    </span>
    <!-- 注意上面的input绑定  :value="label" 是用来接收输入框的值 modelValue是用来接收用户点击事件的（父组件传递过来的value值） -->
     <!-- label这个值是写死的 -->
    <span class="one-radio_label">
        <slot>
             {{label}}
        </slot>
    </span>
  </label>
</template>

<script>




// 开始数据绑定 首先我可以拿到label值 label值就是父组件传过来的是写死的
// modelValue是v-model传过来的值,该值需要跟input双向绑定 实现可修改 但是该值没办法直接使用v-moel='modelValue'
// 所以我们这边需要进行设置 定义一个计算属性 get获取值 set设置值 set返回emit事件 告知父组件修改
// 当我们点击相应的按钮 将modelValue修改 然后通过对比label值 来判断是否选中
export default {
    name:'HeRadio',
    inject:{
        RadioGroup:{
            default:''
        }
    },
    computed:{
        model:{
            get(){
            return  this.isGroup ? this.RadioGroup.modelValue : this.modelValue
        },
        set(modelValue){
            // 如果组件被禁用，则不执行任何操作
            if (this.disabled) {
                return
            }
            
            if(this.isGroup){
                this.RadioGroup.$emit('update:modelValue',modelValue)
            }
            this.$emit('update:modelValue',modelValue)
        }
        },
        // 用来判断是否被group包裹
        // 需要返回一个bool值，原生是一个对象 如果非空 !!转bool true 如果没没被包裹使用default为'' !!转bool为false
        isGroup(){
            return !!this.RadioGroup
        }
    },
    props:{  //这是双向绑定传入的值
        modelValue:null,
        label:{
            type:[String, Number, Boolean],
            default:''
        },
        name:{
            type:String,
            default:''  
        },
        disabled:{
            type:Boolean,
            default:false
        }

    }
}
</script>

<style lang="scss">
.he-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .he-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .he-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .he-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .he-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .he-radio.is-checked{
    .he-radio_input{
      .he-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .he-radio_label{
      color:#409eff;
    }
  }
  // 禁用的样式
  .he-radio.is-disabled{
    cursor: not-allowed;
    opacity: 0.6;
    .he-radio_input{
      cursor: not-allowed;
      .he-radio_inner{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;
      }
    }
    .he-radio_label{
      cursor: not-allowed;
      color: #c0c4cc;
    }
  }
</style>