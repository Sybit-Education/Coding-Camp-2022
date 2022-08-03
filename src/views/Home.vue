<template>
  <search @search="eventList = $event" />
    <Filter @filter="eventList = $event" />
  <event-list v-if="eventList.length" :list="eventList" />
  <n-alert v-else title="Keine Angebote gefunden!" type="warning" />
</template>

<script>
import { useEventStore } from '../store/event.store'
import EventList from '../components/event/List.vue'
import Search from '../components/Search.vue'
import Filter from '../components/filter/Filter.vue'
export default {
  name: 'Home',
  components: { EventList, Search, Filter },
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

</style>
