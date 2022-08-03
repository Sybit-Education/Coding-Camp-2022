<template>
    <h3 style="padding-left: 5px"> <vue-feather type="user" size="15px"/> Alter </h3>
  <n-slider v-model:value="range" range :step="1" :max="18" :min="1" @update:value="update($event)"/>
</template>
<script>
export default {
  name: 'AgeRangeFilter',
  emits: ['update'],
  data () {
    return {
      range: [1, 18]
    }
  },
  methods: {
    update (age) {
      this.$emit('update', age)
    }
  }
}
</script>

<style scoped>
.icons {
    align-items: center;
}
</style>
