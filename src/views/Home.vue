<template>
  <event-list :list="eventList" />
  <vue-feather type="search" class="hi2"/>
  <vue-feather type="star"/>
  <vue-feather type="clock"/>
  <vue-feather type="map-pin"/>
  <vue-feather type="calendar"/>
  <vue-feather type="user"/>
  <vue-feather type="arrow-left"/>
  <vue-feather type="share-2"/>
  <vue-feather type="tag"/>

  <n-button>hello
  </n-button>
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
