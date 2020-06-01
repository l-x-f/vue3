const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = 8362
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: `http://localhost:${port}`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    after: require('./src/mock/index')
  },
  chainWebpack(config) {
    // alias
    config.resolve.alias.set('@', resolve('src'))
  }
}
