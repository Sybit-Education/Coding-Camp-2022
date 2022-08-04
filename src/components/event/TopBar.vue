<template>
  <n-grid cols="2 m:2 l:2" responsive="screen" class="top-bar">
    <n-gi>
      <BackBtn/>
    </n-gi>
    <n-gi class="share"><share-button :event="event"></share-button></n-gi>
  </n-grid>
</template>
<script>
import ShareButton from '@/components/event/details/ShareButton'
import BackBtn from './details/BackBtn.vue'
export default {
  name: 'EventTopBar',
  components: { BackBtn, ShareButton },
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
  cursor: pointer;
  position: absolute;
  right: 0;
}
.top-bar {
  margin-top: 10px
}
</style>
