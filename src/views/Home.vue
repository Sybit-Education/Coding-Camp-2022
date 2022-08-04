<template>
  <h2 style="text-align: center">Ferienprogramm Radolfzell</h2>
  <n-grid :x-gap="10" cols="12">
    <n-gi :span="10">
      <search @search="eventList = $event" />
    </n-gi>
    <n-gi :span="2">
      <n-button
        @click="this.$router.push({ name: 'Favoriten' })"
        size="medium"
        style="margin-top: 15px"
      >
        <n-badge :value="favoriteListSize" :max="15">
          <vue-feather stroke="black" fill="#f0a020" size="30" type="star" />
        </n-badge>
      </n-button>
    </n-gi>
  </n-grid>
  <Filter @filter="eventList = $event" />
  <event-list v-if="eventList.length" :list="eventList" />
  <n-alert v-else title="Keine Angebote gefunden!" type="warning" />
</template>

<script>
import EventList from '../components/event/List.vue'
import Filter from '../components/filter/Filter.vue'
import Search from '../components/Search.vue'
import { useEventStore } from '../store/event.store'
import { useFavoriteStore } from '../store/favorite.store'
export default {
  name: 'Home',
  components: { EventList, Search, Filter },
  data () {
    return {
      // TODO: Data from Airtable
      eventList: [],
      searchInput: '',
      favouriteListSize: 0
    }
  },
  created () {
    const favoriteStore = useFavoriteStore()
    this.favoriteListSize = favoriteStore.getFavoriteList.length
    const eventStore = useEventStore()
    eventStore.fetchEventRecords().then((list) => {
      this.eventList = list
    })
  }
}
</script>
