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
 * @param limit 取出数量默认为 30
 * @param timestamp 时间戳
 */
export const getPersonalized = (limit,timestamp) => iAxios.get(`/personalized?limit=${limit}&timestamp=${timestamp}`, {})

/**
 * @method 获取最新音乐
 * @param limit 取出数量默认为 10
 * @param timestamp 时间戳
 */
export const getNewSongs = (limit,timestamp) => iAxios.get(`/personalized/newsong?limit=${limit}&timestamp=${timestamp}`, {})

/**
 * @method 获取歌曲详情
 * @param ids 音乐id，多个用逗号隔开
 */
export const getSongDetail = ids => iAxios.get(`/song/detail?ids=${ids}`, {})

/**
 * @method 获取歌词
 * @param id 音乐id
 */
export const getLyric = id => iAxios.get(`/lyric?id=${id}`, {})

/**
 * @method 获取相似音乐
 * @param id 歌曲id
 */
export const getSimiSong = id => iAxios.get(`/simi/song?id=${id}`, {})


/**
 * @method 获取热门评论
 * @params id 资源id
 * @params type 资源类型
 * @params limit 取出评论数量，默认为20
 * @params ……
 */
export const getCommentHot = params => iAxios.get(`/comment/hot`, { params })

/**
 * @method 新歌速递
 * @param type 地区类型
 */
export const getTopNew = type => iAxios.get(`/top/song?type=${type}`, {})

/**
 * @method 获取歌单详情
 * @param id 歌单id
 */
export const getListDetail = id => iAxios.get(`/playlist/detail?id=${id}`, {})

/**
 * @method 获取所有榜单
 */
export const getTopList = () => iAxios.get(`/toplist`, {})

/**
 * @method 获取歌单分类
 */
export const getPlaylistCat = () => iAxios.get(`/playlist/catlist`, {})

/**
 * @method 获取热门歌单分类
 */
export const getPlaylistHotCat = () => iAxios.get(`/playlist/hot`, {})

/**
 * @method 获取歌单
 * @params order new/hot
 * @params cat tag分类，默认为全部
 * @params limit 默认为50
 * @params offset 偏移数量，用于分页
 */
export const getPlaylist = params => iAxios.get(`/top/playlist`, { params })

/**
 * @method 搜索
 * @params keywords 关键词
 * @params limit 默认为30
 * @params offset 分页
 * @params type 搜索类型，默认为1即单曲
 */
export const search = params => iAxios.get(`/cloudsearch`, { params })

/**
 * @method 歌手列表
 * @params limit
 * @params offset
 * @params type
 * @params area
 * @params initial
 */
export const getArtistList = params => iAxios.get(`/artist/list`, { params })

/**
 * @method 歌手热门歌曲50首
 * @param id 歌手id
 */
export const getSingerHotSong = id => iAxios.get(`/artist/top/song?id=${id}`, {})

/**
 * @method 获取歌手详情
 * @param id 歌手id
 */
export const getSingerDetail = id => iAxios.get(`/artist/detail?id=${id}`, {})

/**
 * @method 获取歌手专辑
 * @params id
 * @params limit
 * @params offset
 */
export const getSingerAlbum = params => iAxios.get(`/artist/album`, { params })

/**
 * @method 获取专辑内容
 * @param id 专辑id
 */
export const getAlbum = id => iAxios.get(`/album?id=${id}`, {})

/**
 * @method 获取歌曲所有评论
 * @params id 音乐id
 * @params limit 默认为20
 * @params offset
 * @params before
 */
export const getAllComments = params => iAxios.get(`/comment/music`, { params })

/**
 * @method 登录后获取用户信息
 */
export const getMyInfo = time => iAxios.get(`/user/subcount?timestamp=${time}`, {})

