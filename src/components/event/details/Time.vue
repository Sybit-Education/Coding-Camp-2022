<template>
  <span class="event-title" v-if="event.time">{{ event.time }}</span>
</template>
<script>
export default {
  name: 'EventTime',
  props: {
    event: {
      required: true
    }
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
