import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes' // 这是es6中的语法，导入部分，引入非default时，使用花括号

Vue.use(VueRouter)

// const routes = [
// {
//   path: '/',
//   name: 'Home',
//   component: Home
// },
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
// ]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    // 不能用history模式，否则一刷新就404
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    } // 这样切换路由的时候自动滚到顶部
})

export default router
