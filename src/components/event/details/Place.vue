<template>
<div>
    <vue-feather type="map-pin" size="15" />
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
