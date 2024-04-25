import { createApp ,defineAsyncComponent} from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import '@/style/main.scss'
import '@/style/transition.scss';
import 'virtual:svg-icons-register'
import * as ElementPlusIcons from '@element-plus/icons-vue'

const SvgIcon = defineAsyncComponent(() => import('./components/SvgIcon/index.vue'))
const app = createApp(App)
// 全局挂载和注册 element-plus 的所有 icon
app.config.globalProperties.$icons = []
for (const [key, component] of Object.entries(ElementPlusIcons)) {
    app.config.globalProperties.$icons.push(key)
    app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')

app.component('SvgIcon', SvgIcon) // 图片预览

