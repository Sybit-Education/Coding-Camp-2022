<template>
  <event-top-bar :event="event"></event-top-bar>
  <n-grid cols="1 m:12 l:12" responsive="screen" v-if="event && event.id">
    <n-gi :span="3">
      <n-image v-if="event.images" width="250" :src="event.images[0].url" />
    </n-gi>
    <n-gi :span="9">
      <div>
        <h2><event-name :event="event"></event-name></h2>
      </div>
      <div>
        <event-date :date="event.date"></event-date>
      </div>
      <div>
        <vue-feather type="clock" size="15" />
        {{ event.time }}
      </div>
      <div>
        <event-place :place="event.place"></event-place>
      </div>
      <div>
        <event-price :price="event.price"></event-price>
      </div>
      <div>
        <event-description :event="event"></event-description>
      </div>
    </n-gi>
  </n-grid>
</template>
<script>
import EventDate from '@/components/event/details/Date'
import EventDescription from '@/components/event/details/Description'
import EventName from '@/components/event/details/Name'
import EventPlace from '@/components/event/details/Place'
import EventPrice from '@/components/event/details/Price'
import EventTopBar from '@/components/event/TopBar'
import { useEventStore } from '../store/event.store'

export default {
  name: 'EventDetails',
  components: {
    EventName,
    EventDate,
    EventDescription,
    EventPlace,
    EventPrice,
    EventTopBar
  },
  data () {
    return {
      eventId: this.$route.params.id,
      event: {}
    }
  },
  async created () {
    const eventStore = useEventStore()
    await eventStore.fetchEventRecords()
    this.event = await eventStore.getEventById(this.eventId)
    console.log(this.event)
  }
}
</script>
<style scoped>
h2 {
  margin-top: 0 !important;
}
.event-name {
  font-weight: bold;
  font-size: x-large;
  padding: 0;
}
.event-date {
  font-weight: bold;
  font-size: x-large;
  padding: 0;
}
.event-description {
  font-weight: bold;
  font-size: x-large;
  padding: 0;
}
.event-location {
  font-weight: bold;
  font-size: x-large;
  padding: 0;
}
.event-price {
  font-weight: bold;
  font-size: x-large;
  padding: 0;
}
.event-wtime {
  font-weight: bold;
  font-size: x-large;
  padding: 0;
}
</style>
