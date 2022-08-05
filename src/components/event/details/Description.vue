<template>
    <span class="event-title" v-if="event.description">
      <markdown :source="event.description"/>
    </span>
</template>

<script>
import Markdown from 'vue3-markdown-it'

export default {
  name: 'EventDescription',
  props: {
    event: {
      required: true
    }
  },
  components: {
    Markdown
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
