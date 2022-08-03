<template>
    <n-select placeholder="Kategorie auswählen.." v-model:value="selects" multiple :options="categories" :consistent-menu-width="false" @update:value="update($event)" />
</template>

<script>
import { useCategoryStore } from '../../store/category.store'
export default {
  name: 'CategoryFilter',
  data () {
    return {
      categories: [],
      selects: []
    }
  },
  created () {
    const categoryStore = useCategoryStore()
    categoryStore.fetchCategoryRecords().then(list => {
      list.forEach(item => {
        this.categories.push({
          label: item.name,
          value: item.id
        })
      })
    })
  },
  methods: {
    update (selects) {
      this.selects = selects
      this.$emit('update', selects)
    }
  }
}
</script>

<style>

</style>
