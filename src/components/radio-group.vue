<template>
<div class="he-radio-group">
    <slot></slot>
</div>
</template>

<script>

export default {
    name:'HeRadioGroup',
    provide(){
        return {
            RadioGroup: this
        }
    },
    props:{
        modelValue:null
    }
}
</script>

<style>
</style>