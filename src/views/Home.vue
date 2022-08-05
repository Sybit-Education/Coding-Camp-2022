<template>
  <h2 style="text-align: center">Ferienprogramm Radolfzell</h2>
  <n-grid :x-gap="10" cols="12">
    <n-gi :span="10">
      <search @search="searchResults = $event; createResultList()" />
    </n-gi>
    <n-gi :span="2">
      <n-button
        @click="this.$router.push({ name: 'Favoriten' })"
        size="medium"
        style="margin-top: 15px"
      >
        <n-badge :value="favouriteListSize" :max="15">
          <vue-feather stroke="black" fill="#ffd200" size="30" type="star" />
        </n-badge>
      </n-button>
    </n-gi>
  </n-grid>
  <Filter @filter="filterResults = $event.list; createResultList($event.filter)" />
  <event-list v-if="resultList.length" :list="resultList" />
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
      eventList: [],
      filterResults: [],
      searchResults: [],
      resultList: [],
      searchInput: '',
      favouriteListSize: 0
    }
  },
  created () {
    const favoriteStore = useFavoriteStore()
    this.favouriteListSize = favoriteStore.getFavoriteList.length
    favoriteStore.$subscribe((state) => {
      this.favouriteListSize = state.events.target.length
    })
    const eventStore = useEventStore()
    eventStore.fetchEventRecords().then((list) => {
      this.eventList = list
      this.resultList = list
    })
  },
  methods: {
    createResultList (filter) {
      let useFilter = false
      if (filter) {
        if (filter.ageRange?.length || filter.price?.length || filter.categories?.length) {
          useFilter = true
        }
      }
      console.log(useFilter)
      if (this.searchResults.length && this.filterResults.length && useFilter) {
        const results = []
        console.log('search + filter')
        this.searchResults.forEach(searchResult => {
          if (this.filterResults.includes(searchResult)) {
            results.push(searchResult)
          }
        })
        this.resultList = results
      } else if (this.filterResults.length) {
        console.log('filter')
        this.resultList = this.filterResults
      } else if (this.searchResults.length) {
        console.log('search')
        this.resultList = this.searchResults
      } else {
        this.resultList = this.eventList
      }
    }
  }
}
</script>
