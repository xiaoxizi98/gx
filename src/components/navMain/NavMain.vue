<template>
  <div v-for="(item, index) in list"
       :key="index">
    <div class="item">
      <div>
        <input type="checkbox"
               v-model="item.complete"
               @click="item.complete=!item.complete" />
        {{ item.title }}
        <button class="del"
                @click="del(item,index)">删除</button>
      </div>
    </div>
  </div>
</template>
    
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'navMain',
  setup(props, ctx) {
    let list = ref([
      {
        title: '吃饭',
        complete: false,
      },
      {
        title: '睡觉',
        complete: false,
      },
      {
        title: 'code',
        complete: false,
      },
    ])
    let del = (item, index) => {
      list.value.splice(index, 1)
    }
    return {
      list,
      del,
    }
  },
})
</script>
<style lang="scss">
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 180px;
  cursor: pointer;
  z-index: 99;
  button {
    position: absolute;
    right: 10px;
    top: 6px;
    display: none;
  }
  &:hover {
    background: #ddd;
    button {
      display: block;
    }
  }
}
</style>