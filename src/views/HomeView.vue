<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <div>
      {{list}}
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavFooter from '@/components/navFooter/NavFooter'
import NavMain from '@/components/navMain/NavMain'
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Home',
  components: {
    NavHeader,
    NavFooter,
    NavMain,
  },
  setup(props, ctx) {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let data = reactive({
      name: 'jack',
      age: '20',
    })
    let clickNum = (val) => {
      console.log(val)
      data.name = 'gx'
    }
    return {
      // num,name,arr
      ...toRefs(data),
      clickNum,
      list,
    }
  },
})
</script>
<style scoped lang="scss">
</style>