<template>
  <div>
    <div class="search-component">
      <button type="primary" size="small" @click="handleSearch()">
        <i class="fa fa-search" /> 搜索
      </button>
      <button size="small" @click="handleClear()">
        <i class="fa fa-trash" /> 清除
      </button>
    </div>
  </div>
</template>

<script>
// 筛选，清除按钮组
export default {
  methods: {
    // 筛选事件
    handleSearch() {
      this.$emit('subSearch')
    },
    // 清除事件
    handleClear() {
      this.$emit('subClear')
    }
  }
}
</script>
