import { defineStore } from 'pinia'

export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    /** @type {boolean} */
    loading: false
  }),
  getters: {
    showLoadingSpinner: (state) => state.loading
  },
  actions: {
    /**
     * Update Loading Spinner
     * @param {boolean} loading
     */
    updateLoading (loading) {
      this.loading = loading
    }
  }
})
