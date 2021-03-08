import iAxios from './instance'

/**
 * @method 手机号登录
 * @param phone 用户id
 * @param password 用户密码
 */
export const login = (phone, password) =>
    iAxios.get(`/login/cellphone?phone=${phone}&password=${password}`, {
        withCredentials: true
    })

