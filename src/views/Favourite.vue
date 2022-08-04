<template>
    <n-button @click="this.$router.push({name:'Home'})" style="margin: 10px 0">
    <vue-feather type="arrow-left"/>
    </n-button>
  <favourite-list v-if="favouriteList.length" :list="favouriteList" />
  <n-alert v-else title="Keine Favoriten gefunden!" type="warning" />
</template>

<script>
import { useFavoriteStore } from '../store/favorite.store'
import FavouriteList from '../components/favourite/FavouriteList.vue'
import { useEventStore } from '@/store/event.store'
export default {
  name: 'Favourite',
  components: { FavouriteList },
  data () {
    return {
      // TODO: Data from Airtable
      favouriteList: [],
      searchInput: ''
    }
  },
  created () {
    const favoriteStore = useFavoriteStore()
    const favList = favoriteStore.getFavoriteList
    const list = []
    if (favList && favList.length > 0) {
      const eventStore = useEventStore()
      for (let i = 0; i < favList.length; i++) {
        const e = eventStore.getEventById(favList[i])
        if (e?.id) {
          list.push(e)
        }
      }
      this.favouriteList = list
    }
  }
}
</script>

<style scoped>

</style>
