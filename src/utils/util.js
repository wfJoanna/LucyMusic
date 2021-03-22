// 数组随机
export function shuffle (arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

export function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function createSong (data) {
    return {
        id: data.id,
        url: `https://music.163.com/song/media/outer/url?id=${data.id}.mp3`,
        singer: getSinger(data.ar),
        name: data.name,
        duration: getSecond(data.dt),
        image: data.al.picUrl,
        album: data.al.name
    }
}

export function getSinger (artists) {
    let arr = []
    for (let val of artists) {
        arr.push(val.name)
    }
    return arr.join(' / ')
}

// 将毫秒转换成秒
export function getSecond (time) {
    time = Math.floor(time / 1000)
    return time
}

//将秒转换成 mm:ss
export function getMS (time) {
    if (!time) {
        return '00:00'
    }
    let sec = time;
    let m = parseInt(sec / 60)
    let s = parseInt(sec % 60)
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    return m + ':' + s;
}
