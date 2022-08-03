<template>
    <vue-feather type="calendar" size="15" />
    {{ formatDate(this.date) }}
</template>

<script>
import { DateMixin } from '@/mixins/date.mixin'
export default {
  name: 'EventDate',
  mixins: [DateMixin],
  props: {
    date: {
      type: String,
      required: true
    }
  }
}
</script>
