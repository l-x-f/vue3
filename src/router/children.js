const routes = [
  {
    path: '/list/index',
    name: 'listIndex',
    meta: {
      title: '列表'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/list')
  },
  {
    path: '/goods',
    name: 'goods',
    meta: {
      title: '商品'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/goods')
  },
  {
    path: '/goods/details',
    name: 'goodsDetails',
    hidden: true,
    meta: {
      title: '商品详情'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/goods/details')
  }
]

export default routes
