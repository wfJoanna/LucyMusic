import * as types from './mutationType'
import state from './state';
import { playMode } from '../utils/constant';
import {shuffle} from '../utils/util';

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
    }
}
