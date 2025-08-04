<template>
<div class="he-form">
<slot></slot>
</div>
</template>

<script>
export default {
    name:'HeForm',
    provide(){
        return{
            form:this
        }
    },
  props:{
    labelWidth:{
      type:String,
      default:'30px'
    },
    model:{
        type:Object,
        required:true,
        default:()=>({})
    }
  }
}
</script>

<style lang="scss">

</style>