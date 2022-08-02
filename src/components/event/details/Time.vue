<template>
<p>Wann: {{ this.time }}</p>
</template>

<script>
export default {
  name: 'EventTime',
  props: {
    time: {
      type: String,
      required: true
    }
  }
}
</script>
