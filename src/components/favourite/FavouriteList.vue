<template>
<div v-if="list[0] || list.length > 1">
  <n-space justify="center">
    <n-grid :y-gap="10" :x-gap="10" cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen">
        <n-gi v-for="item in list" :key="item.id">
            <event-card :item="item" />
         </n-gi>
    </n-grid>
  </n-space>
</div>
</template>

<script>
import EventCard from '@/components/event/Card.vue'
export default {
  name: 'FavouriteList',
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
