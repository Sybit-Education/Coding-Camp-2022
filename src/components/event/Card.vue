<template>
  <n-space justify="center">
    <n-card
      @click="
        this.$router.push({
          name: 'EventDetails',
          params: { id: item.id }
        })
      "
    >
      <template #header>
        <h3>{{ item.name }}</h3>
      </template>
      <template #cover>
        <event-image :item="item" />
      </template>
      <n-grid cols="1 m:3">
        <n-gi>
          <event-place :place="item.place" />
        </n-gi>
        <n-gi>
          <event-date :date="item.date" />
        </n-gi>
        <n-gi>
          <event-time :time="item.time" />
        </n-gi>
        <n-gi>
          <event-price :price="item.price" />
        </n-gi>
      </n-grid>
    </n-card>
  </n-space>
</template>

<style>
.n-card > .n-card-header {
  padding: 0 0 0 25px !important;
}
.n-card {
  cursor: pointer;
  width: 350px;
  height: 400px;
}

@media only screen and (max-width: 600px) {
  .n-card {
    width: 380px;
    height: 495px;
  }
}
</style>

<script>
import EventDate from '@/components/event/details/Date.vue'
import EventPlace from '@/components/event/details/Place.vue'
import EventPrice from '@/components/event/details/Price.vue'
import EventTime from '@/components/event/details/Time.vue'
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
