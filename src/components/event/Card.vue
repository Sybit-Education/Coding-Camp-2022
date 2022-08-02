<template>
  <n-space justify="center">
  <n-card :title="item.name" >
    <template #cover>
      <event-image :item="item"/>
    </template>
  </n-card>
  </n-space>
</template>

<style scoped>
.n-card {
  width: 230px;
  height: 250px;
}

@media only screen and (max-width: 600px) {
.n-card {
  width: 325px;
  height: 350px;
}
}
</style>

<script>
import EventImage from './Image.vue'
export default {
  name: 'EventCard',
  components: {
    EventImage
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
