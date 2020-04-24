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
  </div>
</template>

<script>
import { getCurrentInstance, unref, ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const { ctx } = getCurrentInstance()
    const { query } = unref(ctx.$router.currentRoute)
    const list = ref([])
    onMounted(() => {
      const { isLogin } = ctx.$store.getters
      axios.get('/app.json', { params: { ...query, isLogin } }).then(res => {
        list.value = res.data.data
      })
    })

    return { list }
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
