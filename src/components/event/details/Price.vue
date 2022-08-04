<template>
<div>
<vue-feather type="tag" size="17" />
    {{ this.price }}€
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
