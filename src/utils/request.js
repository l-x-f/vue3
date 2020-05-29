/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable dot-notation */
import axios from 'axios'
import { Message } from './message'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000
})

// request 拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.success) {
      return res
    } else {
      const message = res.message
      const code = res.code
      // 清除所有提示
      Message.destroy()
      // token过期了
      console.log(code)
      if (
        code &&
        (code === 'NOT_LOGIN' ||
          code === 'USER_NOT_EXIST' ||
          code === 'NO_PERMISSION')
      ) {
        Message.error({
          content: '非法登录',
          onClose: () => {
            store.dispatch('logout').then(res => res)
          }
        })
        return Promise.reject('非法登录')
      }

      Message.error(message || '请求失败')
      return Promise.reject(res)
    }
  },
  error => {
    Message.error(error.errMsg || '请求失败')
    return Promise.reject(error)
  }
)
export default service
