<template>
  <vue-feather @click="toggleFavourite()" class="star" type="star" size="40" :fill="isFavourite ? '#f0a020' : 'white'"/>
</template>

<script>
import { useFavoriteStore } from '@/store/favorite.store'

export default {
  name: 'FavouriteButton',
  methods: {
    toggleFavourite () {
      const favoriteStore = useFavoriteStore()
      if (favoriteStore.isEventInList(this.event.id)) {
        favoriteStore.removeFavorite(this.event)
      } else {
        favoriteStore.addFavorite(this.event)
      }
    }
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFavourite () {
      const favoriteStore = useFavoriteStore()
      return favoriteStore.isEventInList(this.event.id)
    }
  }
}
</script>

<style scoped>
.star:hover {
  color: #f0a020;
}
</style>
