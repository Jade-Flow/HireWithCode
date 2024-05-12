import { createApp } from 'vue'
import App from '@/App.vue' // Ensure correct import path
import router from '@/router'
import '@/main.css' // Ensure correct import path for styles

const app = createApp(App)
app.use(router)
app.mount('#app')
