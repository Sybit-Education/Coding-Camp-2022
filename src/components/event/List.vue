<template>
  <n-space justify="center">
    <n-grid :y-gap="10" :x-gap="10" cols="1 s:1 m:2 l:3" responsive="screen">
        <n-gi v-for="item in list" :key="item.id">
            <event-card  :item="item" />
         </n-gi>
    </n-grid>
  </n-space>
</template>

<script>
import EventCard from './Card.vue'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
