<template>
  <n-grid cols="2 m:2 l:2" responsive="screen">
    <n-gi
      ><vue-feather
        type="arrow-left"
        size="22"
        @click="
          this.$router.push({
            name: 'Home'
          })
        "
    /></n-gi>
    <n-gi class="share"><vue-feather type="share-2" size="22" /></n-gi>
  </n-grid>
</template>
<script>
export default {
  name: 'EventTopBar'
}
</script>
<style scoped>
.share {
  position: absolute;
  right: 0px;
}
</style>
