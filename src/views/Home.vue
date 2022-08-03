<template>
  <event-list :list="eventList" />
</template>

<script>
import { useEventStore } from '../store/event.store'
import EventList from '../components/event/List.vue'
export default {
  name: 'Home',
  components: { EventList },
  data () {
    return {
      // TODO: Data from Airtable
      eventList: [],
      searchInput: ''
    }
  },
  created () {
    const eventStore = useEventStore()
    eventStore.fetchEventRecords().then(list => {
      this.eventList = list
    })
  }
}

</script>

<style scoped>
.hi {
  color: black;
  text-align: center;
  font-family: "Arial";
  font-size: 50px;
}

</style>
