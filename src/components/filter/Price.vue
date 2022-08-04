<template>
  <span class="title">
    <vue-feather type="tag" size="15px" class="icon" />
    Preis
  </span>
  <n-slider v-model:value="range" range :step="1" @update:value="update($event)" />
</template>

<script>
export default {
  name: 'PriceFilter',
  emits: ['update'],
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
