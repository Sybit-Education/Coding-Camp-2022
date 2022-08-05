import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    /** @type {string[]} */
    favoriteList: localStorage.getItem('favorites')?.split(',').map(x => { return x }) || []
  }),
  getters: {
    /**
     * @returns {string[]}
     */
    getFavoriteList: (state) => state.favoriteList,
    isEventInList: (state) => (id) => state.favoriteList.includes(id),
    getFavoriteById: (state) => (id) => state.favoriteList.find((favorite) => favorite.id === id)
  },
  actions: {
    /**
     * Fetch Favorite Records from Airtable and save in state
     * @returns {null|*}
     */
    addFavorite (event) {
      if (!this.isEventInList(event.id)) {
        const list = this.favoriteList
        list.push(event.id)
        localStorage.setItem('favorites', list.toString())
      }
    },
    removeFavorite (event) {
      if (this.isEventInList(event.id)) {
        const list = this.favoriteList
        list.splice(this.favoriteList.indexOf(event.id), 1)
        localStorage.setItem('favorites', list.toString())
      }
    }
  }
})
