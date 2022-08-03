<template>
    <n-button @click="toggle = !toggle" style="margin-bottom: 10px">
        <vue-feather type="filter"/>
        Filter
    </n-button>
    <div :style="`margin: 0 0 10px 0; display: ${toggle ? '' : 'none'}`">
      <category-filter @update="filter.categories = $event; filterEvents()" />
    </div>
</template>

<script>
import { useEventStore } from '../../store/event.store'
import CategoryFilter from './Category.vue'
export default {
  components: { CategoryFilter },
  name: 'Filter',
  data () {
    return {
      toggle: false,
      eventList: [],
      filter: {
        categories: []
      }
    }
  },
  created () {
    const eventStore = useEventStore()
    eventStore.fetchEventRecords().then(list => {
      this.eventList = list
    })
  },
  methods: {
    filterEvents () {
      const list = this.filterByCategory(this.eventList)
      this.$emit('filter', list)
    },
    filterByCategory (events) {
      if (this.filter.categories && this.filter.categories.length !== 0) {
        const list = []
        events.forEach(event => {
          if (event.category?.length !== 0) {
            event.category.forEach(category => {
              if (this.filter.categories.includes(category)) {
                if (!list.includes(event)) {
                  list.push(event)
                }
              }
            })
          }
        })
        return list
      } else {
        return events
      }
    }
  }
}

</script>

 <style>

 </style>
