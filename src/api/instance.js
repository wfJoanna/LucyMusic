import config from './config'
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import router from '../router'

const { api_base_url } = config

let instance = axios.create({
    timeout: 1000 * 20, // 如果请求花费了超过 `timeout` 的时间，请求将被中断
    baseURL: api_base_url
})

instance.defaults.responseType = 'json'
instance.defaults.withCredentials = true // 表示跨域请求时是否需要使用凭证
instance.defaults.transformRequest = [ // 在向服务器发送前，修改请求数据
    data => {
        return qs.stringify(data)
    }
]
instance.defaults.validateStatus = function () {
    return true
}
// 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 reject

// 请求拦截器
instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Message.error({ message: '请求超时！' })
        return Promise.reject(error)
    }
)

// 响应拦截器，即异常处理
instance.interceptors.response.use(
    response => {
        let data = response.data
        let status = response.status
        if (status === 200) {
            return Promise.resolve(data)
        } else if (status === 301) {
            Message.warning({ message: '请先登录！' })
            router.push({
                path: 'login'
            })
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        Message.error({ message: '响应失败！' })
        return Promise.reject(error)
    }
)

let ajaxMethod = ['get', 'post']
let iAxios = {}
ajaxMethod.forEach(method => {
    iAxios[method] = function (url, data, config) {
        return new Promise(function (resolve, reject) {
            instance[method](url, data, config)
                .then(response => {
                    if (response.code === 200) {
                        resolve(response)
                    } else {
                        reject(response)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
})

export default iAxios
