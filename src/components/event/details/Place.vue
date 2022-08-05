<template>
<div v-if="place">
    <vue-feather type="map-pin" size="17" />
    {{ this.place }}
</div>
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
