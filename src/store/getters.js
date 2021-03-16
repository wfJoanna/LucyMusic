export default {
    currentSong: state => {
        return state.playList[state.currentIndex] || {}
    }
}
