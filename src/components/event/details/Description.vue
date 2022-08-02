<template>
  <span class="event-title" v-if="event.description">{{ event.description }}</span>
</template>
<script>
export default {
  name: 'EventDescription',
  props: {
    event: {
      required: true
    }
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
