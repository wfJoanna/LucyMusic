export default {
    // 数组随机
    shuffle (arr) {
        let _arr = arr.slice()
        for (let i = 0; i < _arr.length; i++) {
            let j = this.getRandomInt(0, i)
            let t = _arr[i]
            _arr[i] = _arr[j]
            _arr[j] = t
        }
        return _arr
    },
    getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },
    createSong (data) {
        return {
            id: data.id,
            url: `https://music.163.com/song/media/outer/url?id=${data.id}.mp3`,
            singer: this.getSinger(data.song.artists),
            name: data.name,
            duration: this.getSecond(data.song.duration),
            image: data.picUrl
        }
    },
    getSinger (artists) {
        let arr = []
        for (let val of artists) {
            arr.push(val.name)
        }
        return arr.join(' / ')
    },
    // 将毫秒转换成秒
    getSecond (time) {
        time = Math.floor(time / 1000)
        return time
    },
    //将秒转换成 mm:ss
    getMS (time) {
        let sec = time;
        let m = parseInt(sec / 60)
        let s = parseInt(sec % 60)
        if (m < 10) m = '0' + m;
        if (s < 10) s = '0' + s;
        return m + ':' + s;
    }
}
