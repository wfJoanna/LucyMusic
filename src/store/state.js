import {playMode} from '../utils/constant';

export default {
    // 用户信息
    userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
    // 顺序播放列表
    sequenceList: [],
    // 播放模式（列表循环、单曲循环、随机播放）
    mode: playMode.sequence,
    // 播放列表
    playList:[],
    // 播放索引（是播放列表中的索引）
    currentIndex:-1,
    // 播放状态
    playing:false,
    // 当前音乐播放时间，单位是秒
    currentTime:0
}
