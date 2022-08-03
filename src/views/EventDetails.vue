<template>
  <n-grid cols="1 m:12 l:12" responsive="screen">
    <n-gi :span="3">
      <event-image :item="event"></event-image>
    </n-gi>
    <n-gi :span="9">
      <div>
        <span class="event-name">Name:</span>
        <br />
        <event-name :event="event"></event-name>
      </div>
      <div>
        <span class="event-date">Date:</span>
        <br />
        <event-date :event="event"></event-date>
      </div>
      <div>
        <span class="event-wtime">Time:</span>
        <br />
        <event-time :event="event"></event-time>
      </div>
      <div>
        <span class="event-location">Location:</span>
        <br />
        <event-place :event="event"></event-place>
      </div>
      <div>
        <span class="event-price">Price:</span>
        <br />
        <event-price :event="event"></event-price>
      </div>
      <div>
        <span class="event-description">Description:</span>
        <br />
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
import EventTime from '@/components/event/details/Time'
import EventImage from '@/components/event/Image'
import { useEventStore } from '../store/event.store'

export default {
  name: 'EventDetails',
  components: {
    EventName,
    EventDate,
    EventDescription,
    EventPlace,
    EventPrice,
    EventTime,
    EventImage
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
