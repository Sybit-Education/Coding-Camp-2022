<template>
    <span class="event-title" v-if="event.description">
      <markdown-wrapper :source="event.description"/>
    </span>
</template>

<script>
import MarkdownWrapper from '@/components/MarkdownWrapper.vue'

export default {
  name: 'EventDescription',
  props: {
    event: {
      required: true
    }
  },
  components: {
    MarkdownWrapper
  }
}
</script>
.event-title { font-weight: bold; font-size: large; padding: 0; }
<style scoped></style>
