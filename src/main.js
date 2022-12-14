import { createApp } from 'vue'
import App from './App.vue'
import route from './Router'

const app = createApp(App)

app.use(route).mount('#app')
