import { createApp } from 'vue'
import App from './App.vue'
import  Router  from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus)
app.use(Router)
app.use(pinia)
import './permission.js'
app.mount('#app')
