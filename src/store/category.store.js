import { defineStore } from 'pinia'
import { categoryService } from '@/services/category.service'
import { useLoadingStore } from '@/store/loading.store'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    /** @type {category[]} */
    categoryList: []
  }),
  getters: {
    /**
     * @returns {category[]}
     */
    getCategoryList: (state) => state.categoryList,
    getCategoryById: (state) => (id) => state.categoryList.find((category) => category.id === id)
  },
  actions: {
    /**
     * Fetch Category Records from Airtable and save in state
     * @returns {null|*}
     */
    async fetchCategoryRecords () {
      if (!this.categoryList || this.categoryList.length === 0) {
        try {
          const loadingStore = useLoadingStore()
          loadingStore.updateLoading(true)
          this.categoryList = await categoryService.getList()
          loadingStore.updateLoading(false)
        } catch (error) {
          console.warn(error)
          return null
        }
      }
      return this.categoryList
    }
  }
})
