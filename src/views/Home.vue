<template>
  <search @search="eventList = $event" />
    <Filter @filter="eventList = $event" />
  <event-list v-if="eventList.length" :list="eventList" />
  <n-alert v-else title="Keine Angebote gefunden!" type="warning" />
  <button
    @click="
      this.$router.push({
        name: 'EventDetails',
        params: { id: 'reczK8kt8xZlAW62b' }
      })
    "
  >
    test
  </button>
</template>

<script>
import EventList from '../components/event/List.vue'
import Search from '../components/Search.vue'
import Filter from '../components/filter/Filter.vue'
import { useEventStore } from '../store/event.store'
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
    eventStore.fetchEventRecords().then((list) => {
      this.eventList = list
    })
  }
}
</script>

<style scoped></style>
