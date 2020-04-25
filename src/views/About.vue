<template>
  <div class="about">
    <ul class="warp">
      <li v-for="item in list" :key="item.id" class="item">
        <div class="avatar-box">
          <span class="label">头像:</span>
          <img :src="item.imgurl" class="img" />
        </div>
        <p class="name">名字： {{ item.teacher }}</p>
      </li>
    </ul>
    <SaveButton />
  </div>
</template>

<script>
import { getCurrentInstance, unref, reactive, toRefs, computed } from 'vue'

export default {
  setup() {
    const { ctx } = getCurrentInstance()
    const { query } = unref(ctx.$router.currentRoute)
    const data = reactive({ list: [] })

    const isLogin = computed(() => ctx.$store.getters)
    console.log(isLogin)

    ctx.$axios.get('/app.json', { params: { ...query } }).then(res => {
      data.list = res.data.data
    })

    return { ...toRefs(data) }
  },
  mounted() {
    console.log(this, 'this')
  }
}
</script>

<style lang="scss" scoped>
.warp {
  .item {
    margin-top: 10px;
    display: flex;
    align-items: center;
    .name {
      font-size: 18px;
    }
    .avatar-box {
      .label {
        display: inline-block;
        vertical-align: middle;
      }
      .img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        vertical-align: middle;
        margin: 0 20px;
      }
    }
  }
}
</style>
