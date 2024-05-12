import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mavonEditor from 'mavon-editor'
import ElementPlus from 'element-plus'
import 'mavon-editor/dist/css/index.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(mavonEditor)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
