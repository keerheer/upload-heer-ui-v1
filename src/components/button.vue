<template>
    <!-- 数组第一个是type类型 第二个是plain -->
<button 
class="he-button"
:class="[`he-button--${type}`,
{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled}]"
@click="handleClick"
:disabled="disabled"
>
<!-- 字体图标 -->
<i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
        <slot></slot>
    </span>
</button>
</template>

<script>

export default{
    name:'he-button',
    props:{
        type:{ //此处的type表示按钮的类型 是传递的参数
            type:String, // 此处的type是接收的参数类型为字符串
            default:'default'   
        },
        plain:{ //子组件校验 镂空
            type:Boolean,
            default: false
        },
        round:{//子组件校验 圆角
            type:Boolean,
            default: false
        },
        circle:{//子组件校验 圆
            type:Boolean,
            default: false
        },
        icon:{//子组件校验 图标
            type:String,
            default:''
        },
        disabled:{//子组件校验 禁用
            type:Boolean,
            default:false
        }
    },
    // created(){
    //   console.log(this.$slots);
    // },
    methods:{
        handleClick(e){
            if(this.disabled) return; // 如果按钮被禁用，直接返回
            this.$emit('button-click',e)
        }
    }

}
</script>

<style lang="scss" scoped>
// 颜色定义
$normal-color: #fff;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;

.he-button {
  display: inline-block;
  position: relative;
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
  line-height: 1;
  cursor: pointer;
  background-color: $normal-color;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  color: #606266;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  // 禁止文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: $normal-active-color;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.he-button--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.he-button--success {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}

.he-button--info {
  color: #fff;
  background-color: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    background-color: $info-active-color;
    color: #fff;
  }
}
.he-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.he-button--danger {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}

// 朴素按钮

.he-button.is-plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.he-button--primary.is-plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.he-button--success.is-plain {
  box-shadow: unset;
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.he-button--info.is-plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.he-button--warning.is-plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.he-button--danger.is-plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// round 圆角
.he-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形按钮
.he-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 图标和字体之间添加间隔（只在有文字时）
.he-button i[class*='he-icon-a-'] + span {
  margin-left: 5px;
}
// 按钮禁用
.he-button.is-disabled{
   cursor: no-drop; // 当鼠标悬停在该元素上时，显示"禁止"图标
   opacity: 0.6; // 降低透明度显示禁用状态
   &:hover,
   &:focus {
     // 禁用状态下覆盖hover样式，保持原样
     color: #606266 !important;
     border-color: #dcdfe6 !important;
     background-color: $normal-color !important;
   }
}

// 各种类型按钮的禁用状态
.he-button--primary.is-disabled{
   &:hover,
   &:focus {
     color: #fff !important;
     background-color: $primary-color !important;
     border-color: $primary-color !important;
   }
}

.he-button--success.is-disabled{
   &:hover,
   &:focus {
     color: #fff !important;
     background-color: $success-color !important;
     border-color: $success-color !important;
   }
}

.he-button--info.is-disabled{
   &:hover,
   &:focus {
     color: #fff !important;
     background-color: $info-color !important;
     border-color: $info-color !important;
   }
}

.he-button--warning.is-disabled{
   &:hover,
   &:focus {
     color: #fff !important;
     background-color: $warning-color !important;
     border-color: $warning-color !important;
   }
}

.he-button--danger.is-disabled{
   &:hover,
   &:focus {
     color: #fff !important;
     background-color: $danger-color !important;
     border-color: $danger-color !important;
   }
}

// plain按钮的禁用状态
.he-button.is-plain.is-disabled{
   &:hover,
   &:focus {
     background: #fff !important;
     border-color: #dcdfe6 !important;
     color: #606266 !important;
   }
}

.he-button--primary.is-plain.is-disabled{
   &:hover,
   &:focus {
     color: #409eff !important;
     background: #ecf5ff !important;
     border-color: $primary-color !important;
   }
}

.he-button--success.is-plain.is-disabled{
   &:hover,
   &:focus {
     color: #67c23a !important;
     background: #c2e7b0 !important;
     border-color: $success-color !important;
   }
}

.he-button--info.is-plain.is-disabled{
   &:hover,
   &:focus {
     color: #909399 !important;
     background: #d3d4d6 !important;
     border-color: $info-color !important;
   }
}

.he-button--warning.is-plain.is-disabled{
   &:hover,
   &:focus {
     color: #e6a23c !important;
     background: #f5dab1 !important;
     border-color: $warning-color !important;
   }
}

.he-button--danger.is-plain.is-disabled{
   &:hover,
   &:focus {
     color: #f56c6c !important;
     background: #fbc4c4 !important;
     border-color: $danger-color !important;
   }
}

</style>