<template>
<vue-feather type="clock" size="15" />
    {{ this.time }} Uhr
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
