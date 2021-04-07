import * as types from './mutationType'

export default {
    [types.SET_USER_INFO] (state, data) {
        state.userInfo = data
    },
    [types.CLEAR_USER_INFO] (state) {
        state.userInfo = null
    },
    [types.SET_SEQUENCE_LIST] (state, data) {
        state.sequenceList = data
    },
    [types.SET_PLAYLIST] (state, data) {
        state.playList = data
    },
    [types.SET_CURRENT_INDEX] (state, data) {
        state.currentIndex = data
    },
    [types.SET_PLAYING_STATE] (state, data) {
        state.playing = data
    },
    [types.SET_PLAY_MODE] (state, data) {
        state.mode = data
    },
    [types.SET_CURRENT_TIME] (state, data) {
        state.currentTime = data
    },
    [types.SET_COOKIE] (state, data) {
        state.cookie = data
    },
    [types.CLEAR_COOKIE] (state) {
        state.cookie = null
    }
}
