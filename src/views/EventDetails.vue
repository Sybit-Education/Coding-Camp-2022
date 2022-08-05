<template>
  <event-top-bar :event="event"></event-top-bar>
  <n-grid cols="1 m:12 l:12" responsive="screen" v-if="event && event.id">
    <n-gi :span="3">
      <n-image style="border-radius:10%" v-if="event.images" width="250" :src="event.images[0].url" />
      <n-skeleton v-else height="250px" width="100%" />
    </n-gi>
    <n-gi :span="9">
      <div>
        <h2><event-name :event="event"></event-name></h2>
        <event-calendar :event="event"></event-calendar>
      </div>
      <div>
        <weiterfuehrender-link :event="event" class="schriftgroese"/>
      </div>
      <div>
        <event-date :date="event.date" class="schriftgroese"></event-date>
      </div>
      <div>
        <event-time :time="event.time" class="schriftgroese"></event-time>
        <event-age :event="event" class="schriftgroese"></event-age>
      </div>
      <div>
        <event-place :place="event.place" class="schriftgroese"></event-place>
      </div>
      <div>
        <event-price :price="event.price" class="schriftgroese"></event-price>
      </div>
      <div>
        <event-description :event="event" class="schriftgroese"></event-description>
      </div>
    </n-gi>
  </n-grid>
</template>
<script>
import EventAge from '@/components/event/details/Age.vue'
import EventCalendar from '@/components/event/details/Calendar.vue'
import EventDate from '@/components/event/details/Date'
import EventDescription from '@/components/event/details/Description'
import EventName from '@/components/event/details/Name'
import EventPlace from '@/components/event/details/Place'
import EventPrice from '@/components/event/details/Price'
import EventTime from '@/components/event/details/Time.vue'
import WeiterfuehrenderLink from '@/components/event/details/WeiterführenderLink'
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
    EventTopBar,
    WeiterfuehrenderLink,
    EventTime,
    EventAge,
    EventCalendar
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
.schriftgroese {
  font-size: 17px;
}
</style>
