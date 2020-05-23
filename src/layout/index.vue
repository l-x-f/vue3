<template>
  <div class="layui-layout layui-layout-admin">
    <div class="layui-header">
      <div class="layui-logo">vue 3 后台管理系统</div>
      <!-- 头部区域（可配合layui已有的水平导航） -->

      <ul class="layui-nav layui-layout-right">
        <li class="layui-nav-item">
          <a>xiaofei</a>
        </li>
        <li class="layui-nav-item">退出</li>
      </ul>
    </div>

    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree" lay-filter="test">
          <li
            v-for="item in childrenRootes"
            :key="item.path"
            class="layui-nav-item"
          >
            <router-link :to="item.path">{{ item.meta.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="layui-body">
      <!-- 内容主体区域 -->
      <div class="app-main">
        <div class="layui-card">
          <div class="layui-card-body">
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <div class="layui-footer">
      <!-- 底部固定区域 -->
      © https://l-x-f.github.io
    </div>
  </div>
</template>

<script>
import childrenRootes from '@/router/children'

export default {
  components: {},
  data() {
    return { childrenRootes: childrenRootes.filter(item => !item.hidden) }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.app-main {
  padding: 20px 20px 150px;
  background-color: #f5f5f5;
  min-height: 78vh;
}
.top {
  background-color: #393d49 !important;
}
.layui-layout-left {
  height: 100%;
  width: 100%;
  font-size: 14px;
}
.layui-nav-item {
  user-select: none;
  cursor: pointer;
}
.layui-breadcrumb {
  font-size: 14px;
  color: #999;
}
.layui-breadcrumb {
  visibility: visible;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 100%;
}
</style>
