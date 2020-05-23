/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import axios from 'axios'

const app = createApp(App)

/**
 * createApp()  创建一个app实例后，相当于vue2里的Vue，会暴露以下方法
 */
// component: 注册全局组件
// config: 全局配置
// directive: 注册全局自定义指令
// mixin: 混入
// mount: 挂载
// provide: 依赖注入
// unmount: 卸载
// use: 使用插件

// 注册全局组件
import SaveButton from '@/globalComponents/SaveButton'
app.component('SaveButton', SaveButton)

// 注册全局自定义指令 `v-focus`
app.directive('focus', {
  inserted: function(el) {
    console.log(el)
    el.focus()
  }
})

// 全局混入
app.mixin({
  beforeCreate() {
    console.log('我是全局mixin')
  }
})

// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$axios = axios

// 注册插件
class plugin {
  static install(_vue) {
    // 混入
    _vue.mixin({
      beforeCreate() {
        console.log('我是plugin')
      }
    })
  }
}
app.use(plugin)

// 全局注册过滤器filter，哈哈貌似vue 3 放弃了过滤器

//
app
  .use(router)
  .use(store)
  .mount('#app')
