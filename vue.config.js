const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8361,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack(config) {
    // alias
    config.resolve.alias.set('@', resolve('src'))
  }
}
