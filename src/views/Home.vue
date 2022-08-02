<template>
  <h1>Coding Camp 2022</h1>
</template>

<script>
import { useEventStore } from '../store/event.store'
export default {
  name: 'Home',
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
