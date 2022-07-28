<template>
  <div id="app">
    <n-spin :show="loading">
      <router-view/>
    </n-spin>
  </div>
</template>

<script>
import { useLoadingStore } from '@/store/loading.store'

export default {
  computed: {
    loading () {
      return useLoadingStore().showLoadingSpinner
    }
  }
  // TODO: fetch records from store
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0 7px 0 7px;
}
</style>
