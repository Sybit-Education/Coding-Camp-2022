<template>
<div v-if="time">
  <vue-feather type="clock" size="17" />
  {{ this.time }} Uhr
</div>
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
