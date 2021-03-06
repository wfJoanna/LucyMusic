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
        album: data.al.name,
        albumId: data.al.id
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

// 将秒转换成 mm:ss
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

// 将毫秒转换成 YY年MM月DD日
export function getYMD (time) {
    let d = new Date(time)
    return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'
}

// 设置cookie
export function setCookie (allCookie) {
    let arr = allCookie.split(';;')
    for (let item of arr) {
        document.cookie = item
    }
}

// 删除cookie
export function deleteCookie () {
    document.cookie = "MUSIC_U=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "__csrf=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "__remember_me=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// 获取是几几后以及星座
export function getAstro (timestamp) {
    let newDate = new Date()
    newDate.setTime(timestamp)
    let birthday = newDate.toLocaleDateString(timestamp)
    let birthdayArr = birthday.split('/')
    let year = birthdayArr[0].substring(birthdayArr[0].length - 2) + '后'
    let month = birthdayArr[1]
    let day = birthdayArr[2]
    return (
        year +
        ' - ' +
        '魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'.substr(
            month * 2 - (day < '102223444433'.charAt(month - 1) - -19) * 2,
            2
        ) +
        '座'
    )
}
