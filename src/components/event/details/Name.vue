<template>
  <span class="event-title" v-if="event.name">{{ event.name }}</span>
</template>
<script>
export default {
  name: 'EventName',
  props: {
    event: {
      required: true
    }
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
