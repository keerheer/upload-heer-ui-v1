<template>
<label class="he-checkbox" :class="{'is-checked':isChecked, 'is-disabled':disabled}">
    <span>
        <span class="he-checkbox_input">
            <span class="he-checkbox_inner"></span>
            <input
            v-if="!disabled"
            type="checkbox"
            class="he-checkbox_original"
            :name="name"
            v-model="model"
            :value="label"
            >
        </span>
    </span>
    <span class="he-checkbox_label">
        <slot>
            {{label}}
        </slot>
    </span>
</label>
</template>

<script>

export default {
    name:'HeCheckbox',
    emits:['update:modelValue'],
    inject:{
        checkboxGroup:{
            default:''
        }
    },
    computed:{
        model:{
            get(){
                // return this.modelValue
                return this.isGroup ? this.checkboxGroup.modelValue.value : this.modelValue
            },
            set(modelValue){
                // 如果组件被禁用，则不执行任何操作
                if (this.disabled) {
                    return
                }
                // this.$emit('update:modelValue',modelValue)
                return this.isGroup ? this.checkboxGroup.$emit('update:modelValue',modelValue) : this.$emit('update:modelValue',modelValue)
            }
        },
        isGroup(){
            return !!this.checkboxGroup //跟单选框一样的
        },
        isChecked(){
            // 此处和单选不同 如果被包裹 那么就判断我们的label是否在数组中
            // 如果没有group包裹 那么直接使用值 modelValue是bool值
            if (this.isGroup) {
                const modelValue = this.checkboxGroup.modelValue.value
                return Array.isArray(modelValue) ? modelValue.includes(this.label) : false
            }
            return this.modelValue
        }
    },
    props:{
        modelValue:{
            type:Boolean,
            default:false  // 单独使用是一个是bool值 不传label
        },
        label:{
            type:String, 
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
<style>

.he-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .he-checkbox_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .he-checkbox_inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
        &:after{
          box-sizing: content-box;
          content: '';
          border: 1px solid #ffffff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .he-checkbox_original{
        opacity: 0;
        outline: none;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .he-checkbox_label{
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
  /* 选中的样式 */
  .he-checkbox.is-checked{
    .he-checkbox_input{
      .he-checkbox_inner{
        background-color: #409eff;
        border-color: #409eff;
        &:after{
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
    .he-checkbox_label{
      color: #409eff;
    }
  }
  /* 禁用的样式 */
  .he-checkbox.is-disabled{
    cursor: not-allowed;
    opacity: 0.6;
    .he-checkbox_input{
      cursor: not-allowed;
      .he-checkbox_inner{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;
      }
    }
    .he-checkbox_label{
      cursor: not-allowed;
      color: #c0c4cc;
    }
  }
</style>