<template>
    <n-button @click="toggle = !toggle" style="margin-bottom: 10px">
        <vue-feather type="filter"/>
        Filter
    </n-button>
    <n-grid :style="`margin: 0 0 10px 0; display: ${toggle ? '' : 'none'}`" cols="12" responsive="screen">
      <n-gi :span="12">
        <category-filter @update="filter.categories = $event; filterEvents()" />
      </n-gi>
      <n-gi :span="6">
        <age-range-filter @update="filter.ageRange = $event; filterEvents()"/>
      </n-gi>
      <n-gi :span="6">
        <price-filter @update="filter.price = $event; filterEvents()"/>
      </n-gi>
    </n-grid>
</template>

<script>
import { useEventStore } from '../../store/event.store'
import CategoryFilter from './Category.vue'
import AgeRangeFilter from './AgeFilter.vue'
import PriceFilter from './Price.vue'
export default {
  components: { CategoryFilter, AgeRangeFilter, PriceFilter },
  name: 'Filter',
  data () {
    return {
      toggle: false,
      eventList: [],
      filter: {
        categories: [],
        price: [],
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
      const list = this.filterByCategory(this.filterByPrice(this.filterByAge(this.eventList)))
      this.$emit('filter', list)
    },
    filterValues (x, min, max) {
      return x >= min && x <= max
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
        return events.filter(event => (this.filterValues(event.minAge, range[0], range[1])) ? event : '')
      } else {
        return events
      }
    },
    filterByPrice (events) {
      const range = this.filter.price
      if (range?.length === 2) {
        if (range[0] > range[1]) {
          const temp = range[0]
          range[1] = range[0]
          range[0] = temp
        }
        return events.filter(event => (this.filterValues(event.price, range[0], range[1])) ? event : '')
      } else {
        return (events)
      }
    }
  }
}

</script>
