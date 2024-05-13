import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import router from './router'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import hljs from 'highlight.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

VMdPreview.use(vuepressTheme, {
  Hljs: hljs,
});
const app = createApp(App)
app.use(router)
app.use(VMdPreview)
app.use(ElementPlus)
app.mount('#app')
