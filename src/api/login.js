import request from '@/utils/request'

// 登录校验
export function checkLogin(data) {
  return request({
    url: '/login/userOrg',
    method: 'post',
    data
  })
}

// 登录
export function login(data) {
  return request({
    url: '/login/mobile',
    method: 'post',
    data
  })
}
