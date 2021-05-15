import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


let token = localStorage.getItem("user-token-api-tcc")
if (!token) {
    console.log("a", !!token)
    router.push({ path: '/about' })
} else {
    console.log("b", !!token)
    router.push({ path: '/', })

}