<template>
  <div>
    <AppTable
      :config="tableConfig"
      :table-data="tableData"
      :buttons="buttons"
      @handleClickButtons="handleClickButtons"
    />
  </div>
</template>

<script>
import AppTable from '@/components/Table'
import { Message } from '@/utils/message'

export default {
  components: {
    AppTable
  },
  data() {
    return {
      tableConfig: [
        {
          label: '商品名称',
          width: 160,
          prop: 'nameStr',
          showOverflowTooltip: true
        },
        {
          label: '商品封面',
          width: 80,
          prop: 'faceUrl',
          format: 'icon'
        },
        {
          label: '商品类型',
          width: 100,
          prop: 'customType'
        },
        {
          label: '排序序号',
          width: 100,
          prop: 'sort'
        },
        {
          label: '上架时间',
          width: 200,
          prop: 'createTime',
          format: 'timestamp'
        },
        {
          label: '实际总销量',
          width: 120,
          prop: 'salesVolume'
        },
        {
          label: '限购数量',
          width: 100,
          prop: 'orderLimit'
        },
        {
          label: '状态',
          width: 80,
          prop: 'type'
        },
        {
          label: '商品ID',
          prop: 'id'
        }
      ],
      tableData: [],
      buttons: ['编辑', '删除', '详情']
    }
  },
  created() {
    console.log(this)
    this.$axios.get('/goods.json').then(({ data }) => {
      this.tableData = data.data
      console.log(this.tableData)
    })
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleClickButtons({ row, index, option }) {
      if (option === '详情') {
        this.$router.push({
          path: '/goods/details',
          query: {
            content: row.content
          }
        })
      } else {
        Message(option)
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
