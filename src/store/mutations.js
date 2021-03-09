import * as types from './mutationType'

export default {
    [types.SET_USER_INFO] (state, data) {
        state.userInfo = data
    },
    [types.CLEAR_USER_INFO] (state) {
        state.userInfo = null
    }
}
