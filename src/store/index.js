/* eslint-disable no-useless-catch */
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import { login } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router from '@/router'
import { clearAll, setUserInfo, getUserInfo } from '@/store/storage'

const mutationTypes = {
  SET_TOKEN: 'SET_TOKEN',
  SET_USER_INFO: 'SET_USER_INFO'
}

const state = {
  token: getToken(),
  userInfo: getUserInfo()
}

const mutations = {
  [mutationTypes.SET_TOKEN]: (state, token) => {
    state.token = token
  },
  [mutationTypes.SET_USER_INFO]: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // 用户登录
  async login({ commit }, userInfo) {
    try {
      const data = await login(userInfo)
      const { token } = data
      commit(mutationTypes.SET_TOKEN, token)
      commit(mutationTypes.SET_USER_INFO, data)
      setToken(token)
      setUserInfo(data)
      return data
    } catch (error) {
      throw error
    }
  },

  // 退出登录
  async logout({ commit }) {
    try {
      commit(mutationTypes.SET_TOKEN, '')
      removeToken()
      clearAll()
      router.push('/')
    } catch (error) {
      throw error
    }
  }
}

const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo
}

const store = new Vuex.createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})

export default store
