import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import naive from 'naive-ui'
import VueFeather from 'vue-feather'
import Markdown from 'vue3-markdown-it'

const app = createApp(App)
const pinia = createPinia()

app.use(naive)
app.use(router)
app.use(pinia)
app.use(Markdown)

app.component(VueFeather.name, VueFeather)

app.mount('#app')
