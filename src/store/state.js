import {playMode} from '../utils/constant';

export default {
    // 用户信息
    userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
    // 顺序播放列表
    sequenceList: [],
    // 播放模式（顺序、循环、随机、单曲）
    mode: playMode.sequence,
    // 播放列表
    playList:[],
    // 播放索引（是播放列表中的索引）
    currentIndex:-1,
    // 播放状态
    playing:false
}
