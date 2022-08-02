<template>
  <span class="event-title" v-if="event.place">{{ event.place }}</span>
</template>
<script>
export default {
  name: 'EventPlace',
  props: {
    event: {
      required: true
    }
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
