import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import naive from 'naive-ui'
import VueFeather from 'vue-feather'

const app = createApp(App)
const pinia = createPinia()

app.use(naive)
app.use(router)
app.use(pinia)

app.component(VueFeather.name, VueFeather)

app.mount('#app')
