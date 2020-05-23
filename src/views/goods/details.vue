<template>
  <div class="details">
    <div v-html="html"></div>
    <button class="layui-btn" @click="back">返回</button>
  </div>
</template>

<script>
import { getCurrentInstance, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const html = ref('')
    const Route = useRoute()
    const Router = useRouter()
    const { ctx } = getCurrentInstance()

    const {
      query: { content }
    } = Route

    ctx.$axios.get(content).then(res => {
      html.value = res.data
    })

    const back = () => {
      Router.back()
    }

    return {
      html,
      back
    }
  }
}
</script>

<style lang="scss">
.details {
  padding: 20px;
}
</style>
