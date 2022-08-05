<template>
<n-button strong secondary round class="star" @click="toggleFavourite()" style="background: transparent;">
    <vue-feather type="star" size="20" :fill="isFavourite ? '#ffd200' : '#fff5cc'"/>
</n-button>
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
.star{
}
.star:hover {
  color: #ffd200;
}
</style>
