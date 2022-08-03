<template>
  <n-grid cols="2 m:2 l:2" responsive="screen" class="top-bar">
    <n-gi
      ><vue-feather
        type="arrow-left"
        size="30"
        @click="
          this.$router.push({
            name: 'Home'
          })
        "
    /></n-gi>
    <n-gi class="share"><share-button :event="event"></share-button></n-gi>
  </n-grid>
</template>
<script>
import ShareButton from '@/components/event/details/ShareButton'
export default {
  name: 'EventTopBar',
  components: {
    ShareButton
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.share {
  position: absolute;
  right: 0px;
}
.top-bar {
  margin-top: 10px
}
</style>
