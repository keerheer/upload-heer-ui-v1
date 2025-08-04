<template>
    <div class="he-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'HeCheckboxGroup',
    props:{
        modelValue:{
            type:Array,
            default:() => []
        }
    },
    provide(){
        return{
            checkboxGroup:this
        }
    }
}
</script>