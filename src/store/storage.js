const USERINFO = 'USER-INFO'

// 设置用户信息
export const setUserInfo = data => {
  window.localStorage.setItem(USERINFO, JSON.stringify(data))
}

// 获取用户信息
export function getUserInfo() {
  return JSON.parse(window.localStorage.getItem(USERINFO) || '{}')
}

// 删除用户信息
export function deleteUserInfo() {
  window.localStorage.removeItem(USERINFO)
}

const ORGINFO = 'ORG-INFO'

// 设置机构列表
export const setOrgInfo = data => {
  window.localStorage.setItem(ORGINFO, JSON.stringify(data))
}

// 获取机构列表
export function getOrgInfo() {
  const data = window.localStorage.getItem(ORGINFO)

  console.log(data)

  return data && data !== 'undefined' ? JSON.parse(data) : ''
}

// 删除机构列表
export function deleteOrgInfo() {
  window.localStorage.removeItem(ORGINFO)
}

// 清除所有信息
export const clearAll = () => {
  window.localStorage.clear()
}
