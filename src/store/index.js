import Vuex from 'vuex'
console.log(Vuex)

const LOGIN_STATUS = 'login-status'

export default Vuex.createStore({
  state: {
    isLogin: false
  },
  getters: {
    isLogin: state => state.isLogin
  },
  mutations: {
    [LOGIN_STATUS](state, pyload) {
      state.isLogin = pyload
    }
  },
  actions: {
    setLoginStatus({ commit }, pyload) {
      commit(LOGIN_STATUS, pyload)
    }
  }
})
