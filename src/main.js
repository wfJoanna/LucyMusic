import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import * as getApi from './api/api'

console.log("\n %c LucyMusic %c "+"1.0.1"+" \n", "color: #F29229; background: #052E62; font-width: 600; font-size: 20px; padding:5px 0;", "font-size: 16px;background: #F29229; padding:5px 0;color:#000;");

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$api = getApi

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
