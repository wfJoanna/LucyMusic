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
                path: 'playlist',
                meta: {
                    title: '歌单',
                    keepAlive: true
                },
                name: 'playlist',
                component: () => import(/* webpackChunkName: "playlist" */ '../views/playlist/playlist')
            },
            {
                path: 'rank',
                meta: {
                    title: '排行榜',
                    keepAlive: true
                },
                name: 'rank',
                component: () => import(/* webpackChunkName: "rank" */ '../views/rank/rank')
            },
            {
                path: 'singer',
                meta: {
                    title: '歌手',
                    keepAlive: true
                },
                name: 'singer',
                component: () => import(/* webpackChunkName: "singer" */ '../views/singer/singer')
            },
            {
                path: 'song',
                meta: {
                    title: '最新音乐',
                    keepAlive: true
                },
                name: 'song',
                component: () => import(/* webpackChunkName: "song" */ '../views/song/song')
            },
            {
                path: 'song-detail',
                meta: {
                    title: '歌曲详情',
                    keepAlive: true
                },
                name: 'song-detail',
                component: () => import(/* webpackChunkName: "SongDetail" */ '../views/detail/SongDetail')
            },
            {
                path: 'playlist-detail',
                meta: {
                    title: '歌单详情',
                    keepAlive: true
                },
                name: 'playlist-detail',
                component: () => import(/* webpackChunkName: "PlaylistDetail" */ '../views/detail/PlaylistDetail')
            },
            {
                path: 'singer-detail',
                meta: {
                    title: '歌手详情',
                    keepAlive: true
                },
                name: 'singer-detail',
                component: () => import(/* webpackChunkName: "SingerDetail" */ '../views/detail/SingerDetail')
            },
            {
                path: 'album-detail',
                meta: {
                    title: '专辑详情',
                    keepAlive: true
                },
                name: 'album-detail',
                component: () => import(/* webpackChunkName: "AlbumDetail" */ '../views/detail/AlbumDetail')
            },
            {
                path: 'user-detail',
                meta: {
                    title: '用户详情',
                    keepAlive: true
                },
                name: 'user-detail',
                component: () => import(/* webpackChunkName: "UserDetail" */ '../views/detail/UserDetail')
            },
            {
                path: 'search',
                meta: {
                    title: '搜索',
                    keepAlive: true
                },
                name: 'search',
                component: () => import(/* webpackChunkName: "search" */ '../views/search/search')
            }
        ]
    }
]

export const routes = [...loginRouter, ...appRouter]
