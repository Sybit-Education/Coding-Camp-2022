<template>
  <n-grid cols="2 m:2 l:2" responsive="screen" class="top-bar">
    <n-gi>
      <BackBtn/>
    </n-gi>
    <n-gi class="share"><vue-feather type="share-2" size="30" /></n-gi>
  </n-grid>
</template>
<script>
import BackBtn from './details/BackBtn.vue'
export default {
  name: 'EventTopBar',
  components: { BackBtn }
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
