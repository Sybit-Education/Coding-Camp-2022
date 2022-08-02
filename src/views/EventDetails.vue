<template>
  <n-grid cols="1 m:12 l:12" responsive="screen">
    <n-gi :span="3">
      <img width="280" :src="event.images[0].url" />
    </n-gi>
    <n-gi :span="9">
      <div>
        <spann class="event-name">Name:</spann>
        <br />
        <event-name :event="event"></event-name>
      </div>
      <div>
        <spann class="event-description">Description:</spann>
        <br />
        <event-description :event="event"></event-description>
      </div>
      <div>
        <spann class="event-date">Date:</spann>
        <br />
        <event-date :event="event"></event-date>
      </div>
      <div>
        <spann class="event-location">Location:</spann>
        <br />
        <event-place :event="event"></event-place>
      </div>
      <div>
        <spann class="event-price">Price:</spann>
        <br />
        <event-price :event="event"></event-price>
      </div>
      <div>
        <spann class="event-wtime">Time:</spann>
        <br />
        <event-time :event="event"></event-time>
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
import EventTime from '@/components/event/details/Time'
import { useEventStore } from '../store/event.store'

export default {
  name: 'EventDetails',
  components: {
    EventName,
    EventDate,
    EventDescription,
    EventPlace,
    EventPrice,
    EventTime
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
