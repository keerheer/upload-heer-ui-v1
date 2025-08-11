<template>
    <div class="he-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
import { computed } from 'vue'
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
            checkboxGroup: {
                modelValue: computed(() => this.modelValue),
                $emit: (event, value) => this.$emit(event, value)
            }
        }
    },
    emits:['update:modelValue']
}
</script>