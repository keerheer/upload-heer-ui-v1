<template>
<!-- 基本结构 遮罩+头+内容+底 -->
<transition name="dialog-fade">
    <div class="he-dialog_wrapper" v-show="visible" @click.self="close">
        <div class="he-dialog" :style="{ width:width,marginTop:top}">
            <div class="he-dialog_header">
                <!-- 利用slot会替换里面东西的特性此处所传为具名插槽 -->
                 <!-- 如果不传东西 就用里面的span 如果传了里面的span会被替换 -->
                <slot name="title">
                    <span class="he-dialog_title">
                        {{title}}
                    </span>
                </slot>
                <button class="he-dialog_headerbtn" @click="close">
                    <i class="he-icon-a-close"></i>
                </button>
            </div>
            <div class="he-dialog_body">
                <!-- dialog的内容:默认插槽就行了 -->
                <slot></slot> 
            </div>
            <div class="he-dialog_footer">
                <!-- 利用slot会替换里面东西的特性此处所传为具名插槽 -->
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default{
    name:'he-dialog',
    props:{
        title:{
            type:String,
            default:'提示'
        },
        width:{ //控制dialog宽度
            type:String,
            default:'30%'
        },
        top:{//控制dialog距离顶部位置
            // 由于样式里面写的是 margin: 15vh auto 50px;
            type:String,
            default:'15vh'
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        close(){
            console.log('点击了关闭');
            this.$emit('update:visible',false)
        }
    }
}
</script>

<!-- scoped原理 它会给当前组件的所有元素添加一个唯一的属性 并在css选择器中使用对应的属性选择器来选择元素 -->
 <!-- 所以可以使用深度选择器 scss中是::v-deep less中是/deep/ css中是>>> -->
  <!-- 深度选择器的原理是 -->
<style lang="scss" scoped>
.he-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .he-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .he-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .he-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .he-icon-close{
          color: #909399;
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .he-button:first-child{
        margin-right: 20px;
      }
    }
 }
}
  // 动画效果
.dialog-fade-enter-active{
  animation: fade .5s;
}
.dialog-fade-leave-active{
  animation: fade .5s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>