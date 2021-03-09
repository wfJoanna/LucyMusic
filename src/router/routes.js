import layout from '../views/layout/layout'

/**
 * 登录
 */
export const loginRouter = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            isLogin: true
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login/login')
    }
]

/**
 * 主路由
 */
export const appRouter = [
    {
        path: '/',
        redirect: {
            name: 'home'
        },
        meta: {
            title: '首页',
            keepAlive: true
        },
        component: layout,
        children: [
            {
                path: 'home',
                meta: {
                    title: '首页',
                    keepAlive: true
                },
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../views/home/home')
            },
            {
                path: 'rank',
                meta: {
                    title: '排行榜',
                    keepAlive: true
                },
                name: 'rank',
                component: () => import(/* webpackChunkName: "rank" */ '../views/rank/rank')
            }
        ]
    }
]

export const routes = [...loginRouter, ...appRouter]
