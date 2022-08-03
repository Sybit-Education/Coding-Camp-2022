<template>
  <n-config-provider :theme-overrides="customTheme">
    <div id="app">
      <n-spin :show="loading">
        <router-view/>
      </n-spin>
    </div>
  </n-config-provider>
  <div id="app">
    <n-spin :show="loading">
      <router-view />
      <div id="buttons">
        <n-button text @click="this.$router.push({name:'Impressum'})">Impressum</n-button>
        <n-button text @click="this.$router.push({name:'Datenschutz'})">Datenschutz</n-button>
      </div>
    </n-spin>
  </div>
</template>

<script>
import { useLoadingStore } from '@/store/loading.store'
import { NConfigProvider } from 'naive-ui'
import customTheme from '@/naive-ui-theme-overrides.json'

export default {
  components: {
    NConfigProvider
  },
  data () {
    return {
      customTheme
    }
  },
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
#buttons{
  padding: 15px;
  position: absolute;
  margin-top: 590px;
}
</style>
