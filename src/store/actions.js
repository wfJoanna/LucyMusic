import * as types from './mutationType'
import state from './state';
import { playMode } from '../utils/constant';
import { shuffle } from '../utils/util';
import * as api from '../api/api'

export default {
    selectPlay ({ commit }, param) {
        let { list, index } = param
        commit(types.SET_SEQUENCE_LIST, list)
        if (state.mode === playMode.random) {
            let randomList = shuffle(list)
            commit(types.SET_PLAYLIST, randomList)
            index = randomList.findIndex(item => item.id === list[index].id)
        } else {
            commit(types.SET_PLAYLIST, list)
        }
        commit(types.SET_CURRENT_INDEX, index)
        commit(types.SET_PLAYING_STATE, true)
    },
    pausePlay ({ commit }) {
        commit(types.SET_PLAYING_STATE, false)
    },
    login ({}, param) {
        let { phone, password } = param
        return api.login(phone, password)
    },
    getLyric ({}, param) {
        return api.getLyric(param)
    },
    getSongDetails ({}, param) {
        return api.getSongDetail(param)
    },
    getNewSongs ({}, param) {
        return api.getNewSongs(param)
    },
    getPersonalized ({}, param) {
        return api.getPersonalized(param)
    },
    logout ({}) {
        return api.logout()
    },
    getBanners ({}) {
        return api.getBanner()
    },
    getSimiSong ({}, param) {
        return api.getSimiSong(param)
    },
    getCommentHot ({}, param) {
        return api.getCommentHot(param)
    },
    getTopNew ({}, param) {
        return api.getTopNew(param)
    },
    getListDetail ({}, param) {
        return api.getListDetail(param)
    },
    getTopList ({}) {
        return api.getTopList()
    },
    getPlaylistCat ({}) {
        return api.getPlaylistCat()
    },
    getPlaylistHotCat ({}) {
        return api.getPlaylistHotCat()
    },
    getPlaylist ({}, param) {
        return api.getPlaylist(param)
    }
}
