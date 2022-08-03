<template>
  <n-space justify="center">
  <n-card :title="item.name">
    <template #cover>
      <event-image :item="item"/>
    </template>
    <n-grid cols="1 m:3">
      <n-gi>
        <event-place :place="item.place"/>
      </n-gi>
      <n-gi>
        <event-date :date="item.date"/>
      </n-gi>
      <n-gi>
        <event-time :time="item.time"/>
      </n-gi>
      <n-gi>
        <event-price :price="item.price"/>
      </n-gi>
    </n-grid>
  </n-card>
  </n-space>
</template>

<style scoped>
.n-card {
  width: 350px;
  height: 400px;
}

@media only screen and (max-width: 600px) {
.n-card {
  width: 325px;
  height: 435px;
}
}
</style>

<script>
import EventPlace from '@/components/event/details/Place.vue'
import EventDate from '@/components/event/details/Date.vue'
import EventTime from '@/components/event/details/Time.vue'
import EventPrice from '@/components/event/details/Price.vue'
import EventImage from './Image.vue'
export default {
  name: 'EventCard',
  components: {
    EventImage,
    EventPlace,
    EventDate,
    EventTime,
    EventPrice
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
