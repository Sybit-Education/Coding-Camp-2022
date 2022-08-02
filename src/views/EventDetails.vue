<template>
  <div><p>test</p></div>
  <img width="100" :src="event.images[0].url" />
  <p>{{ event.name }}</p>
  <p>{{ event.price }}</p>
  <p>{{ event.time }}</p>
  <p>{{ event.date }}</p>
  <p>{{ event.place }}</p>
  <p>{{ event.description }}</p>
</template>
<script>
import { useEventStore } from '../store/event.store'

export default {
  name: 'EventDetails',
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
<style scoped></style>
