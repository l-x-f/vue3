<template>
  <div class="login">
    <div class="loing-form">
      <h1 class="title">管理系统</h1>

      <div class="form">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">账号</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  v-model="form.account"
                  class="input is-normal"
                  type="text"
                  placeholder="请输入账号"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">密码</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  v-model="form.password"
                  class="input is-normal"
                  type="password"
                  placeholder="请输入密码"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="field-body login-btn">
          <div class="field">
            <div class="control">
              <button class="button " @click="handleLogin">
                登录
              </button>
            </div>
          </div>
        </div>
        <p class="tip">账号：admin，密码：12345678</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue'
export default {
  name: 'Login',
  setup() {
    const form = reactive({ account: 'admin', password: '12345678' })
    const { ctx } = getCurrentInstance()
    const handleLogin = () => {
      const { account, password } = form
      if (account === 'admin' && password === '12345678') {
        ctx.$store.dispatch('setLoginStatus', true)
        ctx.$router.push({
          path: '/about',
          query: {
            id: 'test'
          }
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
    top: 50%;
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
    .label {
      color: #ffff;
    }
    .form {
      margin-top: 40px;
    }
    .field:not(:last-child) {
      margin-bottom: 1.75rem;
    }
    .login-btn {
      margin-top: 34px;
      .control {
        padding-left: 26px;
        text-align: center;
        .button {
          width: 100%;
        }
      }
    }
    .tip {
      color: #fff;
      text-align: center;
      margin-top: 16px;
    }
  }
}
</style>
