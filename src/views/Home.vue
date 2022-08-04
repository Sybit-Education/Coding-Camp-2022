<template>
<div style="text-align:center">
  <img src="https://www.radolfzell.de/bausteine.net/i/32274/Slider_LolliPop_Logo.jpg?width=400&hash=-1862807782" alt="LolliPop" style="margin: 10px; width: 80px; height: 50px;"/>
  <img src="https://www.unser-ferienprogramm.de/logo/radolfzell1.jpg" style="margin: 10px; width: 80px; height: 40px;"/>
  <img src="https://werbezentrum-bodensee.de/wp-content/uploads/2016/12/radolfzell.png" style="margin: 10px; width: 80px; height: 60px;"/>
</div>

  <n-grid :x-gap="10" cols="12">
    <n-gi :span="10">
      <search @search="eventList = $event" />
    </n-gi>
    <n-gi :span="2">
      <n-button @click="this.$router.push({name:'Favoriten'})" size="medium" style="margin-top: 15px">
        <vue-feather stroke="black" fill="#f0a020" size="30" type="star" />
      </n-button>
    </n-gi>
  </n-grid>
  <Filter @filter="eventList = $event" />
  <event-list v-if="eventList.length" :list="eventList" />
  <n-alert v-else title="Keine Angebote gefunden!" type="warning" />
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
