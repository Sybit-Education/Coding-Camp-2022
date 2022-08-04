<template>
<n-button strong circle>
      <template #icon>
        <n-icon @click="toggleFavourite()" :color="isFavourite ? 'yellow' : 'black'">
            <vue-feather type="star"/>
        </n-icon>
      </template>
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
