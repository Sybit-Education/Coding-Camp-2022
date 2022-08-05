<template>
  <n-space justify="center">
    <n-card>
      <template #header @click="this.$router.push({name: 'EventDetails', params: { id: item.id }})">
        <h3>{{ item.name }}</h3>
      </template>
      <template #cover>
        <div class="container">
          <event-image :item="item" @click="this.$router.push({name: 'EventDetails', params: { id: item.id }})"/>
          <favourite-button :event="item" class="btn"/>
        </div>
      </template>
      <n-grid cols="1 m:3" @click="this.$router.push({name: 'EventDetails', params: { id: item.id }})">
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
    width: 365px;
    height: 495px;
  }
}
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 13%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>

<script>
import EventDate from '@/components/event/details/Date.vue'
import EventPlace from '@/components/event/details/Place.vue'
import EventPrice from '@/components/event/details/Price.vue'
import EventTime from '@/components/event/details/Time.vue'
import EventImage from './Image.vue'
import FavouriteButton from '@/components/favourite/FavouriteButton.vue'
export default {
  name: 'EventCard',
  components: {
    EventImage,
    EventPlace,
    EventDate,
    EventTime,
    EventPrice,
    FavouriteButton
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
