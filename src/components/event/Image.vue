<template>
    <img v-if="img" :src="img" width="200px" />
    <n-skeleton v-else height="100px" width="100%" />
</template>

<script>
export default {
  name: 'EventImage',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    img () {
      return this.item.images ? this.item.images[0].url : false
    }
  }
}

</script>
