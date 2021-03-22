import iAxios from './instance'

/**
 * @method 手机登录
 * @param phone 手机号码
 * @param password 密码
 */
export const login = (phone, password) =>
    iAxios.get(`/login/cellphone?phone=${phone}&password=${password}`, {
        withCredentials: true
    })

/**
 * @method 退出登录
 */
export const logout = () => iAxios.get('/logout', {})

/**
 * @method 获取轮播图
 */
export const getBanner = () => iAxios.get('/banner', {})

/**
 * @method 获取推荐歌单
 * @params limit 取出数量默认为 30
 */
export const getPersonalized = limit => iAxios.get(`/personalized?limit=${limit}`, {})

/**
 * @method 获取最新音乐
 * @params limit 取出数量默认为 10
 */
export const getNewSongs = limit => iAxios.get(`/personalized/newsong?limit=${limit}`, {})

/**
 * @method 获取歌曲详情
 * @param ids 音乐id，多个用逗号隔开
 */
export const getSongDetail = ids => iAxios.get(`/song/detail?ids=${ids}`,{})

/**
 * @method 获取歌词
 * @param id 音乐id
 */
export const getLyric = id => iAxios.get(`/lyric?id=${id}`,{})

/**
 * @method 获取相似音乐
 * @param id 歌曲id
 */
export const getSimiSong = id => iAxios.get(`/simi/song?id=${id}`,{})
