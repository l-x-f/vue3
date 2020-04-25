// 自动注册
export default app => {
  const requireComponent = require.context('.', false, /\.vue$/)
  requireComponent.keys().forEach(filePath => {
    const componentName = filePath.substring(2).split('.')[0]
    app.component(componentName, requireComponent(filePath).default)
  })
}
