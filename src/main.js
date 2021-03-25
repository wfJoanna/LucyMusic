import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import * as getApi from './api/api'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$api = getApi

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

console.log('只要./')