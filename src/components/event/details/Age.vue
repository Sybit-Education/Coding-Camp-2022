<template>
<vue-feather type="user" size="17"></vue-feather>
<span v-if="event.minAge && !event.maxAge">{{event.minAge}} Jahre</span>
<span v-else-if="event.minAge && event.maxAge">{{event.minAge}} - {{event.maxAge}} Jahre</span>
</template>
<script>
export default {
  name: 'EventAge',
  props: {
    event: {
      required: true
    }
  }
}
</script>
<style scoped>
.skeleton, span {
    margin-left: 5px;

}
</style>
