<template>
<h3 style="padding-left: 5px"> <vue-feather type="tag" size="15px"/> Preis </h3>
  <n-slider v-model:value="range" range :step="1" style="margin: 10px 0 10px 0" @update:value="update($event)" />
</template>

<script>
export default {
  name: 'PriceFilter',
  data () {
    return {
      range: [0, 999]
    }
  },
  methods: {
    update (range) {
      this.$emit('update', range)
    }
  }
}
</script>

<style>
.icons {
    align-items: center;
}
</style>
