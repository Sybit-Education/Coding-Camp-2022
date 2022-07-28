import { defineStore } from 'pinia'
import { eventService } from '@/services/event.service'
import { useLoadingStore } from '@/store/loading.store'

export const useEventStore = defineStore('event', {
  state: () => ({
    /** @type {event[]} */
    eventList: []
  }),
  getters: {
    /**
     * @returns {event[]}
     */
    getEventList: (state) => state.eventList,
    getEventById: (state) => (id) => state.eventList.find((event) => event.id === id)
  },
  actions: {
    /**
     * Fetch Event Records from Airtable and save in state
     * @returns {null|*}
     */
    async fetchEventRecords () {
      if (!this.eventList || this.eventList.length === 0) {
        try {
          const loadingStore = useLoadingStore()
          loadingStore.updateLoading(true)
          this.eventList = await eventService.getList()
          loadingStore.updateLoading(false)
        } catch (error) {
          console.warn(error)
          return null
        }
      }
      return this.eventList
    }
  }
})
