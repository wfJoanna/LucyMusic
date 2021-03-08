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

export const routes = [...loginRouter]
