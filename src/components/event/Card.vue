<template>
  <n-card :title="item.name" />
</template>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>

<script>
export default {
  name: 'EventCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
