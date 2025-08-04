<template>
<div class="he-form-item">
    <label class="he-form-item_label" :style="labelStyle"> {{ label }}</label>
    <div class="he-form_content">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name:'HeFormItem',
    inject:['form'],
    props:{
        label:{
            type:String,
            default:''
        },
        labelWidth:{
            type:String,
            default:'30px'
        }
    },
    computed:{
        labelStyle(){
            return{
                width:this.form.labelWidth
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  .he-form-item{
    margin-bottom: 25px;
    .he-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .he-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>