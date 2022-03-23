import { createStore } from 'vuex'

export default createStore({
  //定义所需要的状态
  state: {
    list: [
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
        complete: true,
      },
    ]
  },
  getters: {},
  //同步修改state
  //第一个参数state 第二个参数是要修改的值
  mutations: {
    addTodo (state, payload) {
      state.list.push(payload)
    },
    delTodo (state, payload) {
      state.list.splice(payload, 1)
    },
    clear (state, payload) {
      state.list = payload
    }
  },
  //异步提交mutation
  actions: {
    asyncSetName (store, params) {
      setTimeout(() => {
        //commit是提交mutation 调用mutation的方法
        store.commit('setName', params)
      }, 2000)

    }
  },
  modules: {}
})