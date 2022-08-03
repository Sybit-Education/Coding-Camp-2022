<template>
  <n-grid :x-gap="10" cols="3 s:4 m:5 l:6 xl:7 2xl:8" responsive="screen">
    <n-gi :span="2">
      <search @search="eventList = $event" />
    </n-gi>
    <n-gi :span="1">
      <n-button @click="this.$router.push({name:'Favoriten'})">
        <vue-feather type="star"/>
      </n-button>
    </n-gi>
  </n-grid>
  <event-list v-if="eventList.length" :list="eventList" />
  <n-alert v-else title="Keine Angebote gefunden!" type="warning" />
</template>

<script>
import { useEventStore } from '../store/event.store'
import EventList from '../components/event/List.vue'
import Search from '../components/Search.vue'
export default {
  name: 'Home',
  components: { EventList, Search },
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
