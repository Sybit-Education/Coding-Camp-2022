import { defineStore } from 'pinia'
import { useLoadingStore } from '@/store/loading.store'
import hostAgencyService from '@/services/hostAgency.service'

export const useHostAgencyStore = defineStore('hostAgency', {
  state: () => ({
    /** @type {string[]} */
    hostAgencyList: []
  }),
  getters: {
    /**
     * @returns {hostAgency[]}
     */
    getHostAgencyList: (state) => state.hostAgencyList,
    getHostAgencyById: (state) => (id) => state.hostAgencyList.find((hostAgency) => hostAgency.id === id)
  },
  actions: {
    /**
     * Fetch HostAgency Records from Airtable and save in state
     * @returns {null|*}
     */
    async fetchHostAgencyRecordsForEvent (event) {
      if (!event.hostAgency || event.hostAgency.length > 0) {
        try {
          const loadingStore = useLoadingStore()
          loadingStore.updateLoading(true)
          this.hostAgencyList = await hostAgencyService.getHostAgencyListForEvent(event)
          loadingStore.updateLoading(false)
        } catch (error) {
          console.warn(error)
          return null
        }
      }
      return this.hostAgencyList
    }
  }
})
