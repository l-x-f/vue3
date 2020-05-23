<template>
  <div class="login">
    <div class="loing-form">
      <h1 class="title">vue3管理系统</h1>

      <div class="form">
        <form class="layui-form" action="">
          <div class="layui-form-item">
            <label class="layui-form-label">账号</label>
            <div class="layui-input-block">
              <input
                v-model="form.account"
                v-focus
                type="text"
                required
                lay-verify="required"
                placeholder="请输入账号"
                autocomplete="off"
                class="layui-input"
              />
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">密码</label>
            <div class="layui-input-block">
              <input
                v-model="form.password"
                type="password"
                required
                lay-verify="required"
                placeholder="请输入密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
          </div>

          <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" @click.prevent="handleLogin">
                登录
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue'
import { Message } from '@/utils/message'
export default {
  name: 'Login',
  setup() {
    const form = reactive({ account: 'admin', password: '12345678' })
    const { ctx } = getCurrentInstance()
    console.log(getCurrentInstance())
    const handleLogin = () => {
      const { account, password } = form
      if (account === 'admin' && password === '12345678') {
        ctx.$store.dispatch('setLoginStatus', true)
        Message('登录成功', () => {
          ctx.$router.push({
            path: '/list/index',
            query: {
              id: 'test'
            }
          })
        })
      }
    }
    return { form, handleLogin }
  }
}
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  background-color: #2d3a4b;
  position: relative;
  .loing-form {
    width: 400px;
    height: 300px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px 20px 0;
    .title {
      width: 100%;
      text-align: center;
      position: absolute;
      top: -60px;
      color: #fff;
      font-size: 24px;
    }
    .form {
      margin-top: 40px;
    }
    .layui-form-label {
      width: 40px;
      color: #fff;
    }
    .layui-form-item {
      margin-bottom: 20px;
    }
    .layui-input-block {
      margin-left: 74px;
      color: #fff;
    }
    .layui-btn {
      width: 100%;
    }
  }
}
</style>
