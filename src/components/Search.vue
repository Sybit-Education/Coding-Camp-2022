<template>
    <n-input size="large" round placeholder="Suchen..." class="search" @input="search($event)" clearable>
        <template #suffix>
        <vue-feather type="search"/>
      </template>
    </n-input>
</template>

<script>

import { useEventStore } from '../store/event.store'
export default {
  name: 'Search',
  data () {
    return {
      eventList: []
    }
  },

  created () {
    const eventStore = useEventStore()
    eventStore.fetchEventRecords().then(list => {
      this.eventList = list
    })
  },

  methods: {
    search (input) {
      const result = []
      this.eventList.find((event) => {
        if (event.name.toLowerCase().includes(input.toLowerCase())) {
          result.push(event)
        }
      })
      this.$emit('search', result)
    }
  }
}
</script>

<style>
.search{
    margin: 12px 0 12px 0;
}
</style>
