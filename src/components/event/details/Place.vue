<template>
<div>
 <span> <vue-feather type="map-pin" size="17" />
    {{ this.place }}
  </span>
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
