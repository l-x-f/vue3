const express = require('express')
const router = express.Router()

// 登录
router.post('/login', (req, res) => {
  const { password, account } = req.body

  if (account === 'admin' && password === '12345678') {
    const data = {
      success: true,
      token: 'd71e9528-94ba-4c59-9356-c3607d664aff',
      message: '登录成功'
    }
    res.json(data)
  } else {
    res.json({
      success: false,
      message: '账号或密码错误'
    })
  }
})

module.exports = app => {
  app.use(router)
}
