<template>
<div v-if="date">
    <vue-feather type="calendar" size="17" />
    {{ this.date }}
</div>
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
