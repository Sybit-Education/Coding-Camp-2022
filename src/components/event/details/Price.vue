<template>
<div v-if="price">
    <vue-feather type="tag" size="17" />
    <span v-if="price">{{" " + this.price }}€</span>
    <span v-else style="color: #18a058; font-weight: bold">Gratis</span>
</div>
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
