<template>
    <vue-feather type="tag" size="17" />
    <span v-if="price">&nbsp;{{this.price }}€</span>
    <span v-else style="color: #18a058; font-weight: bold"> Gratis</span>
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
