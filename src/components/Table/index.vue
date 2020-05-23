<template>
  <div>
    <table class="layui-table">
      <colgroup>
        <col width="50" />
        <col
          v-for="(item, index) in config"
          :key="index"
          :width="item.width ? parseInt(item.width) : 0"
        />
        <col width="300" />
      </colgroup>

      <thead>
        <tr>
          <th>#</th>
          <th v-for="(item, index) in config" :key="index">{{ item.label }}</th>
          <th>操作栏</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ index + 1 }}</td>
          <td v-for="(value, i) in config" :key="i">
            <span
              v-if="value.showOverflowTooltip"
              class="overflow"
              :title="item[value.prop]"
              :style="{
                width: value.width ? value.width + 'px' : '200px',
                display: 'inline-block'
              }"
            >
              {{ item[value.prop] }}
            </span>
            <span v-else-if="value.format === 'icon'">
              <img :src="item[value.prop]" width="60" alt="" />
            </span>
            <span v-else-if="value.format === 'timestamp'">
              {{ new Date(item[value.prop]).toLocaleString() }}
            </span>
            <span v-else>
              {{ item[value.prop] }}
            </span>
          </td>
          <td>
            <span v-for="(value, i) in buttons" :key="i">
              <button
                class="layui-btn"
                :style="{
                  marginRight: '10px',
                  marginTop: '10px'
                }"
                @click="emitButtonEvents(item, index, value)"
              >
                {{ value }}
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    config: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    buttons: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const emitButtonEvents = (item, index, value) => {
      emit('handleClickButtons', { row: item, index, option: value })
    }
    return { emitButtonEvents }
  }
}
</script>
