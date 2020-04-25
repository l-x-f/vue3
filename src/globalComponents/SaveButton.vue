<template>
  <div :style="center ? 'text-align: center' : ''">
    <button
      v-if="back"
      class="layui-btn layui-btn-primary"
      @click="handleBack()"
    >
      <i class="fa fa-history" />
      {{ backText }}
    </button>
    <button class="layui-btn" @click="handleSave()">
      <i class="fa fa-save" />
      {{ saveText }}
    </button>
  </div>
</template>

<script>
// 保存，返回按钮组
export default {
  props: {
    backText: {
      type: String,
      default: '返回'
    },
    saveText: {
      type: String,
      default: '确定'
    },
    center: {
      type: Boolean,
      default: false
    },
    back: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 保存事件
    handleSave() {
      this.$emit('save')
    },
    // 返回事件
    handleBack() {
      if (this.backText === '返回') {
        this.$router.history.go(-1)
      } else {
        this.$emit('subCancel')
      }
    }
  }
}
</script>
