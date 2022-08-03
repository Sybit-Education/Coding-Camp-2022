<template>
  <n-slider v-model:value="range" range :step="1" :max="18" @update:value="update($event)"/>  
</template>
<script>
export default {
name:'AgeRangeFilter',
edits: ['update'],
    data () {
        return {
            range:[1,18]
            }
    },
    methods:{
        update (age) {
            this.$emit('update', age)
        }
    }
}
</script>
