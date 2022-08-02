<template>
<p>Datum: {{ this.date }}</p>
</template>

<script>
export default {
  name: 'EventDate',
  props: {
    date: {
      type: String,
      required: true
    }
  }
}
</script>
