<template>
<div class="he-switch" :class="[{'is-checked':modelValue}, `he-switch--${size}`]" @click="change">

    <span class="he-switch_core" ref="core" >
        <span class="he-switch_core_button"></span>
    </span>
    <!-- name属性 标识它 -->
    <span>
        <input :name="name" class="he-switch_input" type="checkbox"  ref="input">
    </span>
</div>
</template>

<script>

export default {
    name: 'he-switch',
    props: {
        modelValue: { // 切记v3中v-model双向绑定的值为modelValue
            type: Boolean,
            default: false
        },
        activeColor: { // 激活状态的颜色
            type: String,
            default: ''
        },
        inactiveColor: { // 非激活状态的颜色
            type: String,
            default: ''
        },
        size:{
            type:String,
            default:'medium',
            // 自定义验证器函数 ，用于验证传入的 size 属性值是否合法
            // 校验尺寸 如果不是'small', 'medium', 'large' 控制台会进行警告
            validator(value) {
                return ['small', 'medium', 'large'].includes(value)
            }
        },
        name: { // 非激活状态的颜色
            type: String,
            default: ''
        },

    },
    methods:{
        // 下面的注释部分写了两种实现方法，一中是await this.$nextTick() 另外一种就是使用watch监听
         async change(){ //点击改变value值
            this.$emit('update:modelValue',!this.modelValue)
            // 此处进行打印验证在首次进行点击时它的值并没有变换需要通过
            // 数据修改等待dom更新，然后修改颜色
            await this.$nextTick()
            this.setColor()
            console.log(this.modelValue);
            this.$refs.input.checked = this.modelValue
            
        },
        setColor(){
            // 修改开关颜色
            if (this.activeColor || this.inactiveColor) {
            var color = this.modelValue ? this.activeColor : this.inactiveColor
            this.$refs.core.style.borderColor = color
            this.$refs.core.style.backgroundColor = color         
            }
        }
    },
    mounted(){
    // 修改开关颜色
    console.log("mounted",this.modelValue);
    this.setColor()
    // 控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.modelValue
        
    },
//   watch: {
//     'modelValue' () {
//     /*  修改开关颜色 */
//         this.setColor()
//         }
// }
}
</script>

<style lang="scss" scoped>
  .he-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
// 隐藏input标签
    .he-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
    .he-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .he-switch_core_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
    // 不同尺寸样式
    &.he-switch--small {
      .he-switch_core {
        width: 28px;
        height: 16px;
        border-radius: 8px;
        .he-switch_core_button {
          width: 12px;
          height: 12px;
          top: 1px;
          left: 1px;
        }
      }
      &.is-checked .he-switch_core .he-switch_core_button {
        transform: translateX(12px);
      }
    }

    &.he-switch--medium {
      .he-switch_core {
        width: 40px;
        height: 20px;
        border-radius: 10px;
        .he-switch_core_button {
          width: 16px;
          height: 16px;
          top: 1px;
          left: 1px;
        }
      }
      &.is-checked .he-switch_core .he-switch_core_button {
        transform: translateX(20px);
      }
    }

    &.he-switch--large {
      .he-switch_core {
        width: 50px;
        height: 25px;
        border-radius: 12.5px;
        .he-switch_core_button {
          width: 21px;
          height: 21px;
          top: 1px;
          left: 1px;
        }
      }
      &.is-checked .he-switch_core .he-switch_core_button {
        transform: translateX(25px);
      }
    }
        // 选中样式
    &.is-checked {
      .he-switch_core{
        border-color: #409eff;
        background-color: #409eff;
      }
    }
    }
    

  

</style>
 