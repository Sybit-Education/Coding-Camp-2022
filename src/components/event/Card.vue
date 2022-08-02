<template>
  <n-card :title="item.name">
    <n-grid :cols="3">
      <n-gi>
        <span>Wo:</span>
        <event-place :place="item.place"/>
      </n-gi>
      <n-gi>
        Wann:
      <event-date :date="item.date"/>
      </n-gi>
      <n-gi>
        Preis: 3€
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script>
import EventPlace from '@/components/event/details/Place.vue'
import EventDate from '@/components/event/details/Date.vue'

export default {
  name: 'EventCard',
  components: { EventPlace, EventDate },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
