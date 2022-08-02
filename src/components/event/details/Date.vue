<template>
  <span class="event-title" v-if="event.date">{{ event.date }}</span>
</template>
<script>
export default {
  name: 'EventDate',
  props: {
    event: {
      required: true
    }
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
