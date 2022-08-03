<template>
    <n-button @click="toggle = !toggle" style="margin-bottom: 10px">
        <vue-feather type="filter"/>
        Filter
    </n-button>
    <div :style="`margin: 0 0 10px 0; display: ${toggle ? '' : 'none'}`">
      <category-filter @update="filter.categories = $event; filterEvents()" />
    </div>
    <div :style="`margin: 0 0 10px 0; display: ${toggle ? '' : 'none'}`">
    <age-range-filter @update="filter.ageRange = $event; filterEvents()"/>
    </div>
</template>

<script>
import { useEventStore } from '../../store/event.store'
import CategoryFilter from './Category.vue'
import AgeRangeFilter from './AgeFilter.vue'
export default {
  components: { CategoryFilter, AgeRangeFilter },
  name: 'Filter',
  data () {
    return {
      toggle: false,
      eventList: [],
      filter: {
        categories: [],
        ageRange: []
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
      const list = this.filterByCategory(this.filterByAge(this.eventList))
      this.$emit('filter', list)
    },
    filterValues (min, max, value) {
      return value >= min && value <= max
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
    },
    filterByAge: function (events) {
      const range = this.filter.ageRange
      if (range?.length === 2) {
        if (range[0] > range[1]) {
          const tmp = range[1]
          range[1] = range[0]
          range[0] = tmp
        }
        return events.filter(event => (this.filterValues(range[0], range[1], event.minAge)) ? event : '')
      } else {
        return events
      }
    }
  }
}

</script>

 <style>

 </style>
