import { createApp } from 'vue'
import App from './App.vue'
import  Router  from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router)
app.mount('#app')
