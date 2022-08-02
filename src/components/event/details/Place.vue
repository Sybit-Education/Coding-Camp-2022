<template>
<p>{{ this.place }}</p>
</template>

<script>
export default {
  name: 'EventPlace',
  props: {
    place: {
      type: String,
      required: true
    }
  }
}
</script>
