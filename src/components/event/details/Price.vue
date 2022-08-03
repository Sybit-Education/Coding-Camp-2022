<template>
<vue-feather type="tag" size="15" />
    {{ this.price }}€
</template>

<script>
export default {
  name: 'EventPrice',
  props: {
    price: {
      type: Number,
      required: true
    }
  }
}
</script>
