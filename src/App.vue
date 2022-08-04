<template>
  <n-config-provider :theme-overrides="customTheme">
    <div id="app">
    <n-spin :show="loading">
      <router-view />
      <div id="buttons">
        <n-button text @click="this.$router.push({name:'Impressum'})">Impressum</n-button>
        <n-button text @click="this.$router.push({name:'Datenschutz'})">Datenschutz</n-button>
        <n-button text @click="this.$router.push({name:'UeberUns'})">Über uns</n-button>
        <n-button text @click="showContact = true"> Kontakt </n-button>
         <n-modal v-model:show="showContact">
          <n-card style="width: 600px" title="Café connect" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>
            <div id="paddingModal">
            Bahnhofstr. 2
            <br>
            78315 Radolfzell am Bodensee
            </div>
            </template>
            Telefon: +49 7732/94 06 38-0
            <br>
            Mobil:   +49 159/022 002 29
            <br>
            E-Mail: info@cafe-connect-rz.de
            <template #footer>
            <a href="https://www.cafe-connect-rz.de/kontakt/" target="_blank">https://www.cafe-connect-rz.de/kontakt/</a>
            </template>
          </n-card>
        </n-modal>
      </div>
    </n-spin>
  </div>
  </n-config-provider>
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
      customTheme,
      showContact: false
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
  display: flex;
  justify-content: space-around;
  bottom: 0;
  margin-top: 20px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  #buttons .n-button__content {
    font-size: 17px;
  }
}

#paddingModal{
  margin-right: 20px;
  margin-top: 20px;
}
</style>
