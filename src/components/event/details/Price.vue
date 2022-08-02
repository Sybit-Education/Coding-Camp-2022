<template>
  <span class="event-title" v-if="event.price">{{ event.price }}</span>
</template>
<script>
export default {
  name: 'EventPrice',
  props: {
    event: {
      required: true
    }
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
