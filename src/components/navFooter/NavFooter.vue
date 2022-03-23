<template>
  <div class="container">
    <div>已完成{{ isComplete }}/全部{{ all }}</div>
    <br>
    <button v-if="isComplete>0"
            class="btn"
            @click="clear">清除已完成</button>
  </div>
</template>
    
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'novFooter',
  setup(props, ctx) {
    let isComplete = ref(1)
    let all = ref(3)
    let clear = () => {
      console.log('清除')
    }
    return {
      isComplete,
      all,
      clear,
    }
  },
})
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>