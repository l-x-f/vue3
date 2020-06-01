const bodyParser = require('body-parser')
const router = require('./routers')
const chalk = require('chalk')

module.exports = app => {
  // 设置请求头
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.header('X-Powered-By', '3.4.3')
    // 不加缓存,防止get请求304
    res.header('Cache-Control', 'no-store')
    // options 做特殊处理
    if (req.method === 'OPTIONS') {
      res.sendStatus(200)
    } else {
      next()
    }
  })

  // 配置json
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

  // 注册路由
  router(app)

  console.log(
    chalk.bgBlue(`\n\nServer Info: `),
    chalk.green(`Server runing success.\n`)
  )
}
