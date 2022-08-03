<template>
    <a v-if="event.registration" :href="event.registration" class="link-möglich">ZUR BUCHUNG</a>
    <span v-else-if="!event.registration" class="link-nicht-möglich">! BUCHUNG NICHT MÖGLICH !</span>
</template>
<script>

export default {
  name: 'WeiterführenderLink',
  props: {
    event: {
      required: true
    }
  }
}
</script>
<style scoped>
    .link-möglich {
        color: red;
        font-size: 15px;
    }
     .link-nicht-möglich {
        color: black;
        font-size: 15px;
    }
</style>
